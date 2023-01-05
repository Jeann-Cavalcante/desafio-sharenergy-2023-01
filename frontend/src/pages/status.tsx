import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Box, Modal } from "@mui/material";
import Image from "next/image";

const status = () => {
  const [code, setCode] = useState<any>(100);
  const [imageCode, setImageCode] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var rows = [],
    i = 99,
    len = 599;
  while (++i <= len) rows.push(i);

  console.log(code);

  useEffect(() => {

      let img = `https://http.cat/${code}.jpg`;
      setImageCode(img);

  }, [code]);

  return (
    <>
      <div className="flex">
        <Sidebar />

        <main className="flex items-center justify-center flex-1">
          <div className="flex flex-col" id="select">
            <label htmlFor="code">Selecione HTTP code</label>
            <select
              value={code}
              onChange={(e) => setCode(Number(e.target.value))}
              id="code"
            >
              {/* {rows.map((item: any, index: number) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))} */}

              <option value={100}>100</option>
              <option value={101}>101</option>
              <option value={102}>102</option>
              <option value={103}>103</option>
              <option value={200}>200</option>
              <option value={201}>201</option>
              <option value={202}>202</option>
              <option value={203}>203</option>
              <option value={204}>204</option>
              <option value={205}>205</option>
              <option value={206}>206</option>
              <option value={207}>207</option>
              <option value={208}>208</option>
              <option value={226}>226</option>
              <option value={300}>300</option>
              <option value={301}>301</option>
              <option value={302}>302</option>
              <option value={303}>303</option>
              <option value={304}>304</option>
              <option value={305}>305</option>
              <option value={306}>306</option>
              <option value={307}>307</option>
              <option value={308}>308</option>
              <option value={400}>400</option>
              <option value={401}>401</option>
              <option value={402}>402</option>
              <option value={403}>403</option>
              <option value={404}>404</option>
              <option value={405}>405</option>
              <option value={406}>406</option>
              <option value={407}>407</option>
              <option value={408}>408</option>
              <option value={409}>409</option>
              <option value={410}>410</option>
              <option value={411}>411</option>
              <option value={412}>412</option>
              <option value={413}>413</option>
              <option value={414}>414</option>
              <option value={415}>415</option>
              <option value={416}>416</option>
              <option value={417}>417</option>
              <option value={418}>418</option>
              <option value={421}>421</option>
              <option value={422}>422</option>
              <option value={423}>423</option>
              <option value={424}>424</option>
              <option value={425}>425</option>
              <option value={426}>426</option>
              <option value={428}>428</option>
              <option value={429}>429</option>
              <option value={431}>431</option>
              <option value={451}>451</option>
              <option value={500}>500</option>
              <option value={501}>501</option>
              <option value={502}>502</option>
              <option value={503}>503</option>
              <option value={504}>504</option>
              <option value={505}>505</option>
              <option value={506}>506</option>
              <option value={507}>507</option>
              <option value={508}>508</option>
              <option value={510}>510</option>
              <option value={511}>511</option>
              <option value={599}>599</option>
            </select>
            <button
              onClick={handleOpen}
              className="bg-primary rounded-md p-1 text-white mt-4"
            >
              Ver status code
            </button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center items-center"
          >
            <div className="bg-gray-400 sm:w-[500px] h-[80%] flex flex-col justify-center items-center">
              <img src={imageCode} alt="foto" width={400} height={400} />
              <span>Status code 402</span>
            </div>
          </Modal>
        </main>
      </div>
    </>
  );
}

export default status;