import { useEffect, useState } from "react"
import gifmoto2 from "../assets/gifmoto2.gif"
import gifmoto3 from "../assets/gifmoto3.gif"
import Footer from "./Footer";

const InfoSection = () => {
  const gifs = [gifmoto2, gifmoto3];
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gifs.length)
    }, 2000);
    return () => clearInterval(interval)
  })

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-white mt-14 mb-14">MS Moto Peças</h1>
      <img src={gifs[current]} alt="" className="w-full mb-14" />
      <Footer />
    </div>
  )
}

export default InfoSection