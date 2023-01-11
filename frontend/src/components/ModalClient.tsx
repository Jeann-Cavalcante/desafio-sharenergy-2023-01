import { TextField, Modal } from "@mui/material";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";

const ModalClient = ({ openModal, handleClose, handleEdit, edit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  // const [edit, setEdit] = useState(false);

  

   const apiClient = setupAPIClient();

  const { clients } = useContext(AuthContext);
  async function handleCreateClient(e: FormEvent) {
    e.preventDefault();

    const data = {
      name,
      email,
      address,
      phone,
      cpf,
    };

    clients(data);
    handleClose();
  }

  const innerData = async ()=> {
    console.log(edit)
    if(!edit){
      return
    }
      setName(handleEdit.name);
      setEmail(handleEdit.email);
      setAddress(handleEdit.address);
      setPhone(handleEdit.phone);
      setCpf(handleEdit.cpf);

  }

  
  const handleEditClient = async (e: FormEvent) => {
    e.preventDefault();
    
    const data = {
      name,
      email,
      address,
      phone,
      cpf,
    }

    await apiClient.put(`/client/${handleEdit.id}`, data);

    handleClose();
    
  };

  
  useEffect(() => {
    innerData()
  }, [edit, handleEdit]);


  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      className="flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded-lg w-[90%] sm:w-[500px]  flex flex-col items-center justify-center gap-y-2">
        <h1 className="my-3 font-semibold text-lg">Formulário</h1>

        <form
          onSubmit={handleCreateClient}
          className="flex flex-col gap-y-3 w-full"
        >
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Endereço"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Numero"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </form>

        <div className="flex w-full px-3 gap-x-5 justify-center mt-6">
          {edit ? (
            <button
              onClick={handleEditClient}
              type="submit"
              className="bg-primary hover:opacity-90 duration-300 py-1 px-2 w-[80px] rounded-md text-white cursor-pointer"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleCreateClient}
              type="submit"
              className="bg-primary hover:opacity-90 duration-300 py-1 px-2 w-[120px] rounded-md text-white cursor-pointer"
            >
              Salva
            </button>
          )}

          <button
            onClick={handleClose}
            type="submit"
            className="bg-red-600 hover:opacity-90 duration-300 py-1 px-2 w-[120px] rounded-md text-white cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalClient;