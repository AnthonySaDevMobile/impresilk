import React from 'react'
import {
    FaRoute,
    FaStar,
    FaStarHalf,
    FaStreetView,
  } from "react-icons/fa";
  import Image from 'next/image';
  import mapa from '../../../public/mapa.png'
export default function Mapa() {
  return (
    <div className="md:h-fit h-40 relative w-full">
    <Image src={mapa} className="object-cover h-full w-full" />
    <div className="bg-blue-700 w-2/5 md:w-1/4 p-2 md:p-4 absolute top-0 md:top-1/4 md:left-20 flex justify-between">
      <div>
        <div className="text-white text-xs">
          <strong>Impresilk</strong>
          <p className="text-zinc-200 md:mt-5">
            Av. Felíciano Martins de Freitas, 127
          </p>
          <p className="text-zinc-200">Vila Regina</p>
          <p className="text-zinc-200 ">Montes Claros | MG</p>
        </div>
        <div className="hidden md:flex items-center text-white mt-5 gap-1">
          <strong>4.5</strong>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
        <p className="text-zinc-200 text-xs">105 views</p>
      </div>

      <div className="hidden md:flex md:flex-col  justify-center text-xs">
        <div className="flex md:gap-2">
          <div className="bg-blue-600 w-20 h-24 flex flex-col items-center justify-center text-white gap-2">
            <FaRoute size={30}/>
            <p className="text-zinc-200">Rota</p>
          </div>
          <div className="bg-blue-600 w-20 h-24 flex flex-col items-center justify-center text-white gap-2">
            <FaStreetView size={30} />
            <p className="text-zinc-200">Street View</p>
          </div>
        </div>
        <button className="bg-white mt-5 rounded-xl font-semibold text-blue-700 py-2">VER NO MAPA</button>
      </div>
    </div>
  </div>
  )
}
