import { Pen, Trash } from "phosphor-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { canSSRAuth } from "../utils/canSSRAuth";
import ModalClient from "../components/ModalClient";
import { setupAPIClient } from "../services/api";

const client = () => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [clientEdit, setClientEdit] = useState([]);
  const [edit, setEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const apiClient = setupAPIClient();

  const handleEdit = async (id: string) => {
    const response = await apiClient.post(`/client/${id}`);
    setClientEdit(response.data);
    setEdit(true);
    handleOpen();
  };

  const handleDelete = (id: string) => {
    apiClient.delete(`/client/${id}`);
  };

  useEffect(() => {
    async function getClients() {
      const response = await apiClient.get("/client");
      setClients(response.data);
    }

    getClients();
  }, [edit, handleDelete]);

  useEffect(() => {
    setEdit(false);
  }, [handleClose]);

  function newClient () {
    setEdit(false);
    handleOpen()
  }

  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col w-full">
          <Header />

          <main className="p-5 ">
            <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-center ">
              <h1 className="font-bold text-lg">Lista de clientes</h1>

              <button
                onClick={newClient}
                className="bg-primary hover:opacity-90 duration-300 py-1 px-2 rounded-md text-white "
              >
                Novo Cliente
              </button>
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <section>
              <ul className="overflow-x-auto flex flex-col gap-y-2">
                {clients.map((client) => (
                  <li
                    key={client.id}
                    className="flex font-semibold justify-between p-2 gap-x-2 bg-slate-50 shadow-sm"
                  >
                    <span>{client.name}</span>
                    <span>{client.email}</span>
                    <span>{client.phone}</span>
                    <span>{client.address}</span>
                    <span>{client.cpf}</span>
                    <div className="flex gap-x-2">
                      <Trash
                        onClick={() => handleDelete(client.id)}
                        className="cursor-pointer text-lg"
                      />
                      <Pen
                        onClick={() => handleEdit(client.id)}
                        className="cursor-pointer text-lg"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </main>

          <ModalClient
            openModal={open}
            handleClose={handleClose}
            handleEdit={clientEdit}
            edit={edit}
          />
        </div>
      </div>
    </>
  );
};

export default client;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
