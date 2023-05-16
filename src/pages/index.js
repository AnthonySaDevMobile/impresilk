import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import CarouselHome from "@/components/CarouselHome";
import Link from "next/link";
import aguia from "../../public/aguia.png";
import QuemSomos from "@/components/QuemSomos";
import Cases from "@/components/Cases";
import Portfolio from "@/components/Portfolio";
import Mapa from "@/components/Mapa";
import Produtos from "@/components/Produtos";
import Depoimentos from "@/components/Depoimentos";
import Projetos from "@/components/Projetos";
import Head from "next/head";

export default function Home() {
  return (
    <div>
         <Head>
        <title>Impresilk</title> 
        </Head>
      <Header />
      <main>
        <div id="home">
          <CarouselHome />
          <div className="absolute text-white sm:text-4xl text-xl z-10 sm:top-1/3 top-1/4 left-1/4 text-center right-1/2 w-1/2">
            <p className="font-extralight py-5">Sua fachada representa</p>
            <strong className="py-5 font-extrabold sm:text-5xl text-4xl">
              seu negócio?
            </strong>
            <p className="text-xs sm:tracking-widest tracking-normal py-5">
              FAÇA UM ORÇAMENTO AINDA HOJE
            </p>
            <div className="text-center flex items-center justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=38999337788"
                target="_blank"
              >
                <p className="mt-2 bg-bg-whats w-fit px-2 py-3 font-extrabold rounded-xl text-xs">
                  FALE PELO WHATSAPP
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Projetos />
        <QuemSomos />
        <Cases/>
        <div className="absolute -mt-4s md:-mt-16 w-3/5 md:w-1/3 md:left-1/3 right-24 text-center flex items-center justify-center">
          <Image src={aguia} />
        </div>
        <Produtos />
        <Portfolio />
        <Depoimentos />
        <Mapa />
        <Footer id="footer" />
      </main>
    </div>
  );
}
