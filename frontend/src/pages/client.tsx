import { Pen, Trash } from "phosphor-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Modal, TextField } from "@mui/material";
import { useState } from "react";

const client = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                onClick={handleOpen}
                className="bg-primary hover:opacity-90 duration-300 py-1 px-2 rounded-md text-white "
              >
                Novo Cliente
              </button>
            </div>
            <hr className="border-t-2 border-gray-300 my-4" />

            <section>
              <ul className="overflow-x-auto flex flex-col gap-y-2">
                <li className="flex font-semibold justify-between p-2 gap-x-2 bg-slate-50 shadow-sm">
                  <span>Jean</span>
                  <span>jean@teste.com</span>
                  <span>123456789</span>
                  <span>123456789</span>
                  <div className="flex gap-x-2">
                    <Trash className="cursor-pointer text-lg" />
                    <Pen className="cursor-pointer text-lg" />
                  </div>
                </li>
              </ul>
            </section>
          </main>

          <Modal
            open={open}
            onClose={handleClose}
            className="flex justify-center items-center"
          >
            <div className="bg-white p-4 rounded-lg">
              <h1 className="my-3">Formulário</h1>

              <form className="flex flex-col gap-y-3">
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Numero"
                  variant="outlined"
                />

                <TextField id="outlined-basic" label="CPF" variant="outlined" />
              </form>
                
              <button className="bg-primary hover:opacity-90 duration-300 py-1 px-2 rounded-md text-white ">
                Salva
              </button>
              <button className="bg-red-600 hover:opacity-90 duration-300 py-1 px-2 rounded-md text-white ">
                Cancelar
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default client;