import logoInsta from "../assets/logoinsta.png"
import msLogo from "../assets/logo-ms.png"
import whatsLogo from "../assets/whatsapp.png"
import mailLogo from "../assets/maillogo.png"

const Footer = () => {
  return (
    <footer className='bg-red-700 w-full mt-22 py-8 flex flex-col gap-12 items-center justify-around'>
      <img src={msLogo} className='w-28' />
      <div>
        <h3 className='squada-one-regular text-3xl text-white text-center'>Contatos</h3>
        <a href="https://www.instagram.com/ms___motopecas?igsh=MW1zaXdnbGc2Ym5yag==" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src={logoInsta} className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>@msmotopecas</h4>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511981356115" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-start my-2'>
            <img src={whatsLogo} className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>(11) 9 8135-6115</h4>
          </div>
        </a>
        <a href="mailto:msmotopecas@gmail.com">
          <div className='flex items-center'>
            <img src={mailLogo} className='w-10' />
            <h4 className='text-white squada-one-regular text-2xl ml-4'>msmotopecas@gmail.com</h4>
          </div>
        </a>
      </div>
      <div>
        <h3 className='squada-one-regular text-3xl text-white text-center'>Empresa</h3>
        <h4 className='text-[#cfcfcf] font-sans text-md ml-4 my-4'>Todos direitos reservados a MS Moto Peças</h4>
        <h4 className='text-[#cfcfcf] squada-one-regular text-center text-md ml-4 my-4'>MSMotoPecas &trade;</h4>
      </div>
    </footer>
  )
}

export default Footer