import React, { useRef, useState } from "react";
import Image from "next/image";
import image1 from "../../../public/carouselHome1.jpg";
import image2 from "../../../public/carouselHome4.jpg";
import image3 from "../../../public/carouselHome2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

import { Pagination, Navigation, Autoplay,A11y } from "swiper";

export default function CarouselHome() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  const pagination = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0"+(index + 1) + "</span>";

    },
    clickable: true,
    bulletClass: "swiper-pagination-bullet-1",
    bulletActiveClass: "swiper-pagination-bullet-active-1",
  };

  return (
    <>
      <Swiper
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={pagination}
        onInit={() => setInit(true)}
        className="w-full h-screen pb-10"
      >
        <SwiperSlide className="bg-bg-slide">
          <Image
            src={image1}
            alt="carousel-image"
            className="w-full inset-0 opacity-60 h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-bg-slide">
          <Image
            src={image2}
            alt="carousel-image"
            className="w-full h-full inset-0 opacity-60 object-cover  brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-bg-slide">
          <Image
            src={image3}
            alt="carousel-image"
            className="w-full h-full inset-0 opacity-60 object-cover  brightness-50"
          />
        </SwiperSlide>
      </Swiper>
      <button ref={prevRef} className="cursor-pointer absolute top-1/2 sm:left-20 left-0 z-10">
      <FaArrowCircleLeft color="white" size={32} className="opacity-20"/>
      </button>
      <button ref={nextRef} className="cursor-pointer absolute top-1/2 sm:right-20 right-0 z-10">
      <FaArrowCircleRight color="white" size={32} className="opacity-20"/>
      </button>
    </>
  );
}
