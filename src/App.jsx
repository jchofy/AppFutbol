import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-200 min-h-screen flex justify-center items-center flex-col ">
        <div className="bg-white w-[80%] p-5 rounded-xl border-black border my-5 flex justify-center flex-col items-center">
        <input type="file" className='w-full'/>
        <p>Sube una imagen de futbol</p>
        </div>
        
         
        <a
          href="https://google.com"
          className="bg-blue-600 py-2 px-12 rounded-md text-white"
        >
         Enviar imagen a los administradores
        </a>
      </div>
    </>
  );
}

export default App;
