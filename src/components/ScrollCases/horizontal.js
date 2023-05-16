import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
import tag from "../../../public/tag.png";
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([Scrollbar]);

const ScrollCasesHorizontal = () => {
  const casesCollectionRef = collection(db, "cases");
  const [cases, setCases] = useState([]);
  const [casesForBox, setCasesForBox] = useState(null);

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(casesCollectionRef);
      const casesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setCases(casesData);

      if (casesData.length > 0) {
        setCasesForBox(casesData[0]); // Define o primeiro item como selectedBox
      }
    };

    getDepoiments();
  }, []);

  function handleBox(index) {
    setCasesForBox(cases[index]);
  }

  return (
    <div className="h-96 flex items-center flex-col">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        mousewheel={true}
        scrollbar={{
          draggable: true,
          dragClass: "swiper-scrollbar-drag",
          verticalClass: "swiper-scrollbar-vertical",
          dragSize: 80,
          hide: false,
        }}
        modules={{ Scrollbar, Mousewheel }}
        className="h-[400px] w-full flex flex-col justify-start items-start"
      >
        {cases.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => handleBox(index)}
              className="bg-bg-item h-fit mx-10 flex items-center justify-around"
            >
              <div className="w-[100px] h-[100px] bg-zinc-100">
                <img src={item.imagem} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col px-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <p>{item.nota}</p>
                  <FaStar color="yellow" />
                  <strong className="text-white">{item.nome}</strong>
                  <p className="text-white">{item.segundoNome}</p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">{item.descricao}</p>
                  <p className="text-sm text-yellow-400">
                    Entregue em {item.tempo}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex mt-10 gap-2 cursor-pointer">
        <p className="text-yellow-500">VER TODOS </p>
        <p className="text-white">OS CASES</p>
      </div>

      <div
        className="w-[600px] h-[600px] md:mt-0 mt-5 bg-white relative"
        style={{
          backgroundImage: `url(${casesForBox?.imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-10 sm:h-1/4 h-[100px] w-[180px] relative">
          <Image src={tag} className="object-cover bg-bottom w-[230px] h-[110px]" alt="tag" />
          <div className=" flex flex-col items-center px-10 justify-center w-9/12 absolute top-0 sm:left-14 left-14 right-0 bottom-0">
            <FaStar color="white" />
            <p className="text-xl">{casesForBox?.nota}.0</p>
            <p className="text-xs">{casesForBox?.nome}</p>
            <p className="text-xs">{casesForBox?.segundoNome}</p>
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
  );
};

export default ScrollCasesHorizontal;
