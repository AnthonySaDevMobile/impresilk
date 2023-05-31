import CarouselHome from "@/components/CarouselHome";
import Cases from "@/components/Cases";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mapa from "@/components/Mapa";
import Portfolio from "@/components/Portfolio";
import Produtos from "@/components/Produtos";
import Projetos from "@/components/Projetos";
import QuemSomos from "@/components/QuemSomos";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import aguia from "../../public/aguia.png";
import Loading from "./loading";

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

      const timeout = setTimeout(() => {
          setIsLoading(false);
      }, 2000);

      return () => {

          clearTimeout(timeout);
      };
  }, []);

  
  return (
    <>
    
   {
   isLoading ? <Loading/>
   :( <div>
    <Head>
        <title>Impresilk</title> 
        <link rel="apple-touch-icon" tamanhos="180x180" href="/apple-touch-icon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> <link rel="manifest" href ="/site.webmanifest"/> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> <meta name="msapplication-TileColor" content="#da532c "/> <meta name="theme-color" content="#ffffff"/>
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
          <Image src={aguia} alt="aguia" />
        </div>
        <Produtos />
        <Portfolio />
        <Depoimentos />
        <Mapa />
        <Footer id="footer" />
      </main>
    </div>)
    }
    </>
  );
}
