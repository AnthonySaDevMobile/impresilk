import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";


export default function CarouselProducts() {
  const pagination = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
    clickable: true,
    bulletClass: "swiper-pagination-bullet-2",
    bulletActiveClass: "swiper-pagination-bullet-active-2",
  };
  return (
    <div>
      <div className="flex items-center md:justify-end justify-around m:gap-4 gap-2 md:text-base text-xs h-8">
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Acm</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Lona</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Vinil</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Acrílico</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Pvc</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Neon</button>
      <button className="hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900">Outros</button>
      </div>
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="w-full mt-10"
      >
        <div>
        </div>
        <SwiperSlide className="pb-20">
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-3">
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-3">
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-3">
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
            <div className="flex justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200"></div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">ACM</strong>
                <p className="text-blue-800  font-extrabold text-sm">
                  Alta durabilidade
                </p>
                <p className="text-zinc-500 mt-5 text-sm">
                  Breve descrição do produto
                </p>
                <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                  ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
