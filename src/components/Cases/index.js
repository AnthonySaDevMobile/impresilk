import React from 'react'
import ScrollCasesHorizontal from '../ScrollCases/horizontal'
import ScrollCasesVertical from '../ScrollCases/vertical'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import tag from '../../../public/tag.png'
import caseBackground from "../../../public/caseBackground.jpg";

export default function Cases() {
  return (
    <div className="bg-bg-slide relative w-full h-fit md:pb-20 pb-16 text-white" id="cases">
    <Image
      src={caseBackground}
      alt='caseBackground'
      className="w-full inset-0 absolute opacity-20 h-full object-cover brightness-50"
    />
    <div className="sm:w-9/12 sm:m-auto pt-10">
      <p className="w-[60px] h-[2px] bg-yellow-600 "></p>
      <div className="relative ">
        <p className="tracking-widest  font-semibold text-xs mt-5">
          CASES DE SUCESSOS
        </p>
        <div className="flex justify-between items-center text-xs sm:gap-40 gap-11 mt-10">
          <p className="text-xs sm:text-3xl">
            Trabalhos que se tornam <strong>Referência</strong>
          </p>
          <p className="sm:text-3xl">
            Cidade: <strong>Montes Claros</strong>
          </p>
        </div>

        <div className="flex md:flex-row flex-col w-full mt-10 justify-between">
          {/*Scroll Vertical */}
          <div className="md:flex hidden w-2/5 h-96 ">
            <ScrollCasesVertical />
          </div>
          {/*Scroll Horizontal */}
          <div className="md:hidden w-full h-64">
            <ScrollCasesHorizontal />
          </div>
          <div className="sm:w-[700px] w-full sm:h-[400px] h-[200px] md:mt-0 mt-5 bg-white relative">
            <div className="ml-10 sm:h-1/4 h-[50px] ">
              <Image src={tag} className="object-cover" alt='tag'/>
              <div className="absolute px-2 sm:top-3 top-5 flex flex-col items-center text-center">
                <FaStar color="white" />
                <p className="text-xl">5.0</p>
                <p className="text-xs">Chocolato</p>
                <p className="text-xs">Hotel</p>
              </div>
            </div>
            <div className="w-full h-full absolute top-0 flex opacity-0 hover:opacity-100 items-center justify-center transition-opacity duration-500">
              <Link href="">
                <p className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md">
                  BOOK
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
