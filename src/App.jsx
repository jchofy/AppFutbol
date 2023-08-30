import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-200 min-h-screen flex justify-center items-center flex-col gap-5'>
    <p className='text-center'>Si te gusta el deporte nuestra comunidad podrás compartir las mejores fotos de futbol</p>

    <div className='bg-white w-[70%] p-5 rounded-xl border-black border'>
        <input type="file" className='w-full'/>
        <p>Sube una imagen de futbol</p>
    </div>  
    <button className='bg-blue-600 py-2 px-12 rounded-md text-white'>Enviar imagen a los administradores</button>

    {/* <a href='https://www.google.com' className='bg-blue-600 py-2 px-12 rounded-md text-white'>Ir google </a> */}
      </div>
    </>
  )
}

export default App
