import React, { useState, useEffect } from "react";
import { FaImage, FaPlayCircle, FaSearch, FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

export default function Portfolio() {
  const portfolioCollectionRef = collection(db, "portfolio");
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [portfolioImages2, setPortfolioImages2] = useState([]);
  const [portfolioImages3, setPortfolioImages3] = useState([]);
  const [portfolioImages4, setPortfolioImages4] = useState([]);
  const [portfolioImages5, setPortfolioImages5] = useState([]);
  const [portfolioImages6, setPortfolioImages6] = useState([]);
  const [portfolioImages7, setPortfolioImages7] = useState([]);
  const [portfolioImages8, setPortfolioImages8] = useState([]);
  const [portfolioImages9, setPortfolioImages9] = useState([]);
  useEffect(() => {
    const getPortfolioImages = async () => {
      const data = await getDocs(portfolioCollectionRef);
      setPortfolioImages([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
      setPortfolioImages2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setPortfolioImages3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
      setPortfolioImages4([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[3],
      ]);
      setPortfolioImages5([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[4],
      ]);
      setPortfolioImages6([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[5],
      ]);
      setPortfolioImages7([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[6],
      ]);
      setPortfolioImages8([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[7],
      ]);
      setPortfolioImages9([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[8],
      ]);
    };
    getPortfolioImages();
  }, []);
 

  function fullScreenView(id){
    console.log(id);
  }


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
      <div className="bg-white flex flex-col h-fit">
        <div className="flex mt-10">
          {portfolioImages.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56 ">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
                <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />
                </div>
            </div>
          ))}
          {portfolioImages2.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
               src={foto.imagem}
               alt="image portfolio"
               className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
          {portfolioImages3.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
             <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
        </div>

        <div className="flex">
          {portfolioImages4.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
          {portfolioImages5.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
          {portfolioImages6.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />
 
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          {portfolioImages7.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
          {portfolioImages8.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
             <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)} />

              </div>
            </div>
          ))}
          {portfolioImages9.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
            src={foto.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover absolute "
              />
               <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                  <FaSearch color="white" size={30} className="absolute top-1/2 right-1/2" onClick={()=>fullScreenView(foto.id)}/>
              </div>
            </div>
          ))}
        </div>
        <button className=" text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          VER TUDO
        </button>
      </div>
    </div>
  );
}
