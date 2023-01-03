import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.sharenergy.com.br/wp-content/uploads/2017/07/cropped-symbol_color_site-192x192.png "
        />
      </Head>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-[400px]"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className='mb-6'>
                <label htmlFor="username-address" className="pl-2">
                  Username
                </label>
                <input
                  id="username-address"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                  placeholder="Entre com seu Username"
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
                  autoComplete="current-password"
                  required
                  className="relative block w-full  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembre-me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href={'/signup'}
                  className="font-medium text-primary hover:text-teal-700"
                >
                  Não possui uma conta? Cadastre-se
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border duration-300 border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-teal-700"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Acessar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
