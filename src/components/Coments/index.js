import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaTwitch,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import perfil1 from "../../../public/perfil1.jpg";
import perfil2 from "../../../public/perfil2.jpg";
import perfil3 from "../../../public/perfil3.jpg";

export default function Coments() {
  const [photo, setPhoto] = useState(perfil1);
  const [name, setName] = useState("Ciclano");

  function handleTabSelect(index) {
    console.log(index);
    if (index == 0) {
      setPhoto(perfil1);
      setName("Ciclano")
    }
    if (index == 1) {
      setPhoto(perfil2);
      setName("Beltrano")
    }
    if (index == 2) {
      setPhoto(perfil3);
      setName("Deltrano")
    }
  }

  return (
    <div className="md:w-9/12 md:m-auto md:flex md:gap-4 ">
      <div className="hidden md:flex mt-5">
      <div className="w-12 flex items-center justify-center text-center">
        <p className="-rotate-90  text-3xl font-bold">{name}</p>
      </div>
      <div className="w-[430px] h-[600px]">
        <Image src={photo} className="object-cover w-[430px] h-[600px]" />
      </div>
      </div>

      <Tabs onSelect={handleTabSelect}>
        <TabPanel>
          <div className="pb-14 md:w-9/12 md:m-auto">
            <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
            <div className="md:w-3/5 w-9/12 flex flex-col gap-5 px-2 md:px-0">
              <h2 className="tracking-widest text-xs">LEIA</h2>

              <p>
                {" "}
                <strong className="text-xl">Conecta</strong> Fibra
              </p>

              <p>
                <strong className="">Ciclano</strong> de tal
              </p>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>

              <p className="text-xl">
                <strong>Diretor</strong> comercial
              </p>
            </div>

            <div className="px-2  md:px-0 flex gap-2 py-2 justify-around w-1/2 md:w-1/3">
              <Link href="">
                <FaFacebook color="#8e8e8e" size={16} />
              </Link>
              <Link href="">
                <FaTwitter color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaTwitch color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaGooglePlus color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaInstagram color="#8e8e8e" size={16} />
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="pb-14 md:w-9/12 md:m-auto">
            <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
            <div className="md:w-3/5 w-9/12 flex flex-col gap-5 px-2 md:px-0">
              <h2 className="tracking-widest text-xs">LEIA</h2>

              <p>
                {" "}
                <strong className="text-xl">Conecta</strong> Fibra
              </p>

              <p>
                <strong className="">Beltrano</strong> de tal
              </p>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>

              <p className="text-xl">
                <strong>Gerente</strong> comercial
              </p>
            </div>

            <div className="px-2 md:px-0 flex gap-2 py-2 justify-around w-1/2 md:w-1/3">
              <Link href="">
                <FaFacebook color="#8e8e8e" size={16} />
              </Link>
              <Link href="">
                <FaTwitter color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaTwitch color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaGooglePlus color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaInstagram color="#8e8e8e" size={16} />
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="pb-14 md:w-9/12 md:m-auto">
            <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
            <div className="md:w-3/5 w-9/12 flex flex-col gap-5 px-2 md:px-0">
              <h2 className="tracking-widest text-xs">LEIA</h2>

              <p>
                {" "}
                <strong className="text-xl">Conecta</strong> Fibra
              </p>

              <p>
                <strong className="">Deltrano</strong> de tal
              </p>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>

              <p className="text-xl">
                <strong>Assistente</strong> comercial
              </p>
            </div>

            <div className="px-2 md:px-0 flex gap-2 py-2 justify-around w-1/2 md:w-1/3">
              <Link href="">
                <FaFacebook color="#8e8e8e" size={16} />
              </Link>
              <Link href="">
                <FaTwitter color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaTwitch color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaGooglePlus color="#8e8e8e" size={16} />
              </Link>

              <Link href="">
                <FaInstagram color="#8e8e8e" size={16} />
              </Link>
            </div>
          </div>
        </TabPanel>

        <TabList>
          <div className="flex items-center justify-between md:justify-center">
            <Tab>
              <div className="bg-transparent sm:drop-shadow-3xl drop-shadow-xl md:px-6 px-2 py-3 text-center relative transition-all delay-75">
                <div className="w-[64px] h-[64px] bg-zinc-300 rounded-full absolute -top-12">
                  <Image
                    src={perfil1}
                    className="object-cover rounded-full w-[64px] h-[64px]"
                  />
                </div>
                <h1 className="font-bold">Ciclano</h1>
                <p className="text-sm">Diretor</p>
              </div>
            </Tab>
            <Tab>
              <div className="bg-transparent sm:drop-shadow-3xl drop-shadow-xl p-4 md:px-6 px-2 py-3  text-center relative transition-all delay-75">
                <div className="w-[64px] h-[64px] bg-zinc-300 rounded-full absolute -top-12">
                  <Image
                    src={perfil2}
                    className="object-cover rounded-full w-[64px] h-[64px]"
                  />
                </div>
                <h1 className="font-bold">Beltrano</h1>
                <p className="text-sm">Gerente</p>
              </div>
            </Tab>
            <Tab>
              <div className="bg-transparent p-4 sm:drop-shadow-3xl drop-shadow-xl md:px-6 px-2 py-3  text-center relative transition-all delay-75">
                <div className="w-[64px] h-[64px] bg-zinc-300 rounded-full absolute -top-12">
                  <Image
                    src={perfil3}
                    className="object-cover rounded-full w-[64px] h-[64px]"
                  />
                </div>
                <h1 className="font-bold">Deltrano</h1>
                <p className="text-sm">Assistente</p>
              </div>
            </Tab>
          </div>
        </TabList>
      </Tabs>
    </div>
  );
}
