import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/apiClient";

type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SingInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
  clients: (credential: ClientProps) => Promise<void>;
};

type UserProps = {
  id: string;
  username: string;
};

type SingInProps = {
  username: string;
  password: string;
};

type SingInPropsResponse = {
  id: string;
  username: string;
  token: string;
};


type SignUpProps = {
  username: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type ClientProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.log("Erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user; //!! transforma em boolean

  useEffect(() => {
    // tentar pegar algo no cookie
    const { "@nextauth.token": token } = parseCookies();

    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { id, username } = response.data;

          setUser({
            id,
            username,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ username, password }: SingInProps) {
    try {
      const response = await api.post("/auth", {
        username,
        password,
      });
      console.log(response.data);

      const { id, token, username: name }: SingInPropsResponse = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // Expira em 1 Mês
        path: "/", // Quais caminhos terão acesso ao cookie
      });

      setUser({
        id,
        username: name,
      });

      //Passar para proxima requisições o nosso token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logado com sucesso!");

      //Redirecionar o user para /dashboard
      Router.push("/home");
    } catch (err) {
      toast.error("Erro ao acessar");
      console.log("Erro ao acessa", err);
    }
  }

  async function signUp({ username, password }: SignUpProps) {
    try {
      const response = await api.post("/create", {
        username,
        password,
      });

      Router.push("/");

      toast.success("Cadastro realizado com sucesso");

    } catch (err) {
      toast.error("Erro ao cadastrar");
      console.log("Erro ao cadastrar", err);
    }
  }

  async function clients({name, email, address, cpf, phone}: ClientProps) {
    try {
      const response = await api.post("/client", {
        name,
        email,
        address,
        phone,
        cpf,
      });
      toast.success("Cadastro realizado com sucesso");

    } catch (err) {
      toast.error("Erro ao cadastrar");
      console.log("Erro ao cadastrar", err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp, clients }}
    >
      {children}
    </AuthContext.Provider>
  );
}
