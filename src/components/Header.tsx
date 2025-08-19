import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-16 bg-red-700 flex justify-between">
      <Link to={"/"}>
        <img src="mslogo.svg" className="ml-2 mt-2" />
      </Link>
      <h1 className='text-white font-semibold mt-5 dark:text-white'>MS Moto Peças</h1>
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white mt-4 focus:outline-none">
          <svg className="h-8 w-12 rounded-md fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>

      <nav className={`w-[96%] h-[85%] mt-18 ml-[2%] text-[#d4d4d4] font-semibold absolute flex flex-col bg-red-600 rounded-md items-start justify-start ${isOpen ? 'block' : 'hidden'}`}>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/searchplate" onClick={() => setIsOpen(false)}>BUSCAR PLACA</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/newserviceorder" onClick={() => setIsOpen(false)}>NOVA ORDEM DE SERVIÇO</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/searchworkorder" onClick={() => setIsOpen(false)}>O.S. EM ABERTO</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/frete">MOTO FRETE</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/storage">ESTOQUE</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/cleaner">LAVA RÁPIDO</Link>
        <Link className='w-full p-3 text-2xl rounded hover:bg-red-500 text-center' to="/account">CAIXA</Link>
      </nav>
    </header>
  )
}

export default Header