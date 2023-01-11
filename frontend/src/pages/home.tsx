import { ArrowLeft, ArrowRight } from "phosphor-react";
import Sidebar from "../components/Sidebar";
import { canSSRAuth } from "../utils/canSSRAuth";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

const home = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getApi () {
 
      const res = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
      const data = await res.json();
      const { results } = data;
      setList(results);

    }
    getApi();
  }, [page]);
  
  console.log(list);
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
                {list.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img
                        src={item.picture.large}
                        className="rounded-full w-[50px]"
                      />
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

          <Pagination 
          page={page} 
          count={80/10} 
          color="primary"
          onChange={(e, value) => setPage(value)}
          />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {},
  };
});

export default home;