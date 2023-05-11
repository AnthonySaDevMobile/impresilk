import React, { useRef, useState } from "react";
import Image from "next/image";
import image1 from "../../../public/carouselHome1.jpg";
import image2 from "../../../public/carouselHome4.jpg";
import image3 from "../../../public/carouselHome2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import { Navigation, Autoplay } from "swiper";

export default function CarouselProjetos() {
  return (
    <div className="relative">
      <div className="flex m-auto items-center justify-around gap-3 w-3/4 sm:w-1/4 my-10">
            <button className="border-2 border-zinc-300 py-3 px-6 rounded text-zinc-400">
              <p className="text-xl">07</p>
              <p className="text-xs">DIAS</p>
            </button>
            <button className="border-2 border-zinc-300 py-3 px-6 rounded text-zinc-400">
              <p className="text-xl">15</p>
              <p className="text-xs">DIAS</p>
            </button>
            <button className="border-2 border-zinc-300 py-3 px-6 rounded text-zinc-400">
              <p className="text-xl">30</p>
              <p className="text-xs">DIAS</p>
            </button>
            <button className="border-2 border-zinc-300 py-3 px-6 rounded text-zinc-400">
              <p className="text-xl">60</p>
              <p className="text-xs">DIAS</p>
            </button>
          </div>
      <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="w-full h-1/2 relative"
      >
        
        <SwiperSlide>
          <div className="absolute bg-blue-800 p-4 z-10 text-white font-extrabold top-4 left-4 text-xs sm:top-6 sm:left-6 sm:text-lg">
          <p>26</p>
          <p>JUN</p>
          </div>
          <Image
            src={image3}
            alt="carousel-image"
            className="w-full  h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute bg-blue-800 p-4 z-10 text-white font-extrabold top-4 left-4 text-xs sm:top-6 sm:left-6 sm:text-lg">
          <p>26</p>
          <p>JUN</p>
          </div>
          <Image
            src={image2}
            alt="carousel-image"
            className="w-full  h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute bg-blue-800 p-4 z-10 text-white font-extrabold top-4 left-4 text-xs sm:top-6 sm:left-6 sm:text-lg">
          <p>26</p>
          <p>JUN</p>
          </div>
          <Image
            src={image3}
            alt="carousel-image"
            className="w-full  h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="absolute bg-blue-800 p-4 z-10 text-white font-extrabold top-4 left-4 text-xs sm:top-6 sm:left-6 sm:text-lg">
          <p>26</p>
          <p>JUN</p>
          </div>
          <Image
            src={image2}
            alt="carousel-image"
            className="w-full  h-full object-cover brightness-50"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="prev absolute top-1/2 left-2 z-10">
          {" "}
          <FaArrowCircleLeft color="white" size={32} className="opacity-30" />
        </div>
        <div className="next absolute top-1/2 right-2 z-10">
          {" "}
          <FaArrowCircleRight color="white" size={32} className="opacity-30" />
        </div>
      </div>
    </div>
  );
}
