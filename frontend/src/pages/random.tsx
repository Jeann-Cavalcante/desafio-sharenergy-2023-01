import { ArrowsClockwise } from "phosphor-react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { canSSRAuth } from "../utils/canSSRAuth";

const random = () => {
  const [url, setUrl] = useState("");

  async function handleRefresh() {
    const res = await fetch("https://random.dog/woof.json");
    const data = await res.json();

    if (data.url.includes(".mp4") || data.url.includes(".webm")) {
      handleRefresh();
      return;
    }

    setUrl(data.url);
  }
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col justify-center items-center">
          <button
            onClick={handleRefresh}
            className="flex items-center bg-primary text-white p-2 rounded-md gap-x-2"
          >
            <span className="text-lg font-bold">Clique-me</span>
            <ArrowsClockwise size={28} weight="bold" />
          </button>

          {url && (
            <div className="mt-3">
              <img
                className="sm:min-w-[300px] sm:min-h-[300px] rounded-sm"
                width={300}
                height={300}
                src={url}
                alt="dog"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default random;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});