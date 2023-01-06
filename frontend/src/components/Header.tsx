import { MagnifyingGlass } from "phosphor-react";

const Header = () => {
  return (
    <header className="bg-gray-100 w-full p-4 flex justify-center sm:justify-end items-center">
      <div className="flex items-center relative">
        <input
          className="px-4 py-1 focus:outline-primary rounded-lg placeholder:text-sm placeholder:text-gray-300 w-[220px]"
          placeholder="Pesquisar"
          type="text"
        />
        <MagnifyingGlass
          className="absolute right-1 text-gray-300"
          size={20}
          weight="bold"
        />
      </div>
    </header>
  );
}

export default Header;