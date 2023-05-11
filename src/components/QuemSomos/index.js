import React from 'react'
import Image from 'next/image';
import impresilk from "../../../public/impresilk.jpg";

export default function QuemSomos() {
  return (
    <div className="w-full bg-zinc-100 md:pb-24 pt-10 md:h-fit pb-96 mt-10" id="sobre">
    <div className="mt-10 sm:w-9/12 sm:m-auto">
      <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
      <div className="flex items-center sm:flex-row flex-col justify-between h-80">
        <div className="sm:w-1/2 sm:px-0 px-8">
          <p className="tracking-widest text-zinc-500 text-xs mt-5">
            QUEM SOMOS
          </p>
          <h1 className="text-lg mt-5">Porque nos</h1>
          <strong className="text-lg mb-10">Escolher?</strong>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <button className=" text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
            LER MAIS
          </button>
        </div>
        <div className="w-full sm:h-fit h-full flex items-center justify-center">
          <Image src={impresilk} alt='logo' className="object-cover" />
        </div>
      </div>
    </div>
  </div>
  )
}
