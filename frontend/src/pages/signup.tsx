import Link from "next/link";

const signUp = () => {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-[400px]"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Faça seu cadastro
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className=" ">
              <div className="mb-6">
                <label htmlFor="username-address" className=" pl-2">
                  Username
                </label>
                <input
                  id="username-address"
                  name="Username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                  placeholder="Crie um username"
                />
              </div>
              <div>
                <label htmlFor="password" className="pl-2">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                  placeholder="Crie uma senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={"/"}
                  className="font-medium text-primary hover:text-teal-700"
                >
                  Já possui uma conta? Acesse
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border duration-300 border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-teal-700"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default signUp;