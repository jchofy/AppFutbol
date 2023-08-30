import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App2() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-200 min-h-screen flex justify-center items-center flex-col ">
        <div className="bg-white w-[80%] p-5 rounded-xl border-black border my-5 flex justify-center flex-col items-center">
          <img src="LogoApuestas.jpg" className="rounded-full w-1/3" alt="" />
          <p className="text-center text-2xl font-bold mt-2">@GoldWin90</p>
          <p className="text-center text-xl mb-5">Pronósticos Deportivos IA</p>
          <p>
            Quedan <b>3 </b>de 50 plazas
          </p>
        </div>
        {/* <button className="bg-blue-600 py-2 px-12 rounded-md text-white">
          Enviar imagen a los administradores
        </button> */}

        <p className="mb-5">Únete y gana dinero</p>
        <a
          href="https://t.me/Goldwin90"
          className="bg-blue-600 py-2 px-12 rounded-md text-white"
        >
          Telegram
        </a>
      </div>
    </>
  );
}

export default App2;
