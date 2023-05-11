import React from 'react'
import {
    FaImage,
    FaPlayCircle,
    FaSearch,
    FaStar,
  } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-white w-full h-fit text-center" id="portifolio">
    <p className="tracking-widest  font-semibold text-xs mt-5 text-zinc-400">
      PORTIFÓLIO
    </p>
    <div className="flex gap-2 mt-5 text-xl md:text-3xl items-center justify-center">
      <p>Bonito</p>
      <p>&</p>
      <strong>Confiável</strong>
      <p>&</p>
      <strong>Durável</strong>
    </div>
    <div className="flex justify-center mt-5 gap-2">
      <div className="flex items-center gap-1 md:text-base text-xs">
        <FaStar />
        <p>Todas as mídias</p>
      </div>
      <div className="flex items-center  gap-1">
        <FaPlayCircle />
        <p>Vídeos</p>
      </div>
      <div className="flex items-center  gap-1">
        <FaImage />
        <p>Fotos</p>
      </div>
    </div>
    <div className="bg-white h-fit">
      <div className="flex mt-10">
        <div className="bg-zinc-300 w-1/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-400 w-2/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-500 w-1/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-zinc-700 w-1/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-800 w-1/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-600 w-2/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="bg-zinc-200 w-2/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-500 w-2/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
        <div className="bg-zinc-300 w-1/4 h-36 md:h-56">
          <div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity delay 500 justify-center">
            <FaSearch color="white" size={30} />
          </div>
        </div>
      </div>
      <button className=" text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
        VER TUDO
      </button>
    </div>
  </div>
  )
}
