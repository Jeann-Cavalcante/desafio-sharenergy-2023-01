import Link from "next/link";
import { Cat, Dog, House, SignOut, Users } from "phosphor-react";
import { signOut } from "../contexts/AuthContext";

const Sidebar = () => {
  async function handleSignOut () {
    await signOut()
  }
  return (
    <aside className="bg-secondary relative sm:min-w-[200px] h-screen overflow-y-hidden text-white flex items-center flex-col min-w-[50px] transition-all">
      <img
        src="https://www.sharenergy.com.br/wp-content/uploads/2017/07/cropped-symbol_color_site-192x192.png"
        alt="logo da Sharenergy"
        className="sm:w-[50px] mt-8 w-auto"
      />

      <div className="mt-8 w-full px-2">
        <hr className=" border-gray-300 " />
      </div>

      <div className="flex flex-col items-center mt-8 w-full ">
        <ul className="flex flex-col items-center gap-y-2">
          <li className="flex items-center mt-1 sm:w-[130px] sm:pl-3 rounded-md sm:py-1 p-1 duration-300 hover:bg-primary">
            <Link
              href={"/home"}
              className=" flex gap-x-2 justify-center items-center"
            >
              <House size={28} weight="bold" />
              <span className="text-sm font-bold sr-only sm:not-sr-only">
                Home
              </span>
            </Link>
          </li>

          <li className="flex items-center mt-1 sm:w-[130px]  sm:pl-3 rounded-md sm:py-1 p-1 duration-300 hover:bg-primary">
            <Link
              href={'/status'}
              className=" flex gap-x-2 justify-center items-center"
            >
              <Cat size={24} weight="bold" />
              <span className="text-sm font-bold sr-only sm:not-sr-only">
                Status
              </span>
            </Link>
          </li>

          <li className="flex items-center mt-1 sm:w-[130px] sm:pl-3 rounded-md sm:py-1 p-1 duration-300 hover:bg-primary">
            <Link
              href={"random"}
              className=" flex gap-x-2 justify-center items-center"
            >
              <Dog size={24} weight="bold" />
              <span className="text-sm font-bold sr-only sm:not-sr-only">
                Random
              </span>
            </Link>
          </li>

          <li className="flex items-center mt-1 sm:w-[130px] sm:pl-3 rounded-md sm:py-1 p-1 duration-300 hover:bg-primary">
            <Link
              href={"client"}
              className=" flex gap-x-2 justify-center items-center"
            >
              <Users size={24} weight="bold" />
              <span className="text-sm font-bold sr-only sm:not-sr-only">
                Clientes
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <footer className="flex w-full pl-4 absolute bottom-3">
        <Link href={"/"} onClick={handleSignOut} className="flex gap-x-2">
          <SignOut size={24} weight="bold" />
          <span className="text-sm font-bold sr-only sm:not-sr-only">Sair</span>
        </Link>
      </footer>
    </aside>
  );
}

export default Sidebar;