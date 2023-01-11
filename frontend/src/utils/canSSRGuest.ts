import {
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import { parseCookies } from "nookies";

//função para paginas que so pode ser acessadas por visitantes

export function canSSRGuest(fn: GetServerSideProps) {
  return async (
    ctx: GetServerSidePropsContext
  )=> {
    const cookies = parseCookies(ctx);

    if (cookies["@nextauth.token"]) {
      return {
        redirect: {
          destination: "/home",
          permanent: false,
        },
      };
    }
    return await fn(ctx);
  };
}
