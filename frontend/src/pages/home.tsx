import { ArrowLeft, ArrowRight } from "phosphor-react";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";

const home = (props: any) => {
  console.log(props);
  return (
    <>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 h-screen flex flex-col items-center justify-start">
          <div className="overflow-auto w-[80%] max-h-[95%]">
            <h1 className="text-center py-2 text-bold text-xl">
              Lista paginada{" "}
            </h1>
            <table className="w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Foto
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Nome
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Username
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Idade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {props.results.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img src={item.picture.large} className='rounded-full w-[50px]' />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.name.first} {item.name.last}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.login.username}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.dob.age}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <ArrowLeft size={14} weight="bold" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                1
              </a>
            </li>
            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <ArrowRight size={14} weight="bold" />
              </a>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=80");
  const data = await res.json();
  const user = data;
  const { name, email, picture, login, dob } = user;

  return {
    props: data,
    // props:{
    //   picture: picture.large,
    //   email: email,
    //   name: name.first + " " + name.last,
    //   username: login.username,
    //   age: dob.age
    // }
  };
}

export default home;