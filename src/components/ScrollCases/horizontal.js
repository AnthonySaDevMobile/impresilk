import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";


SwiperCore.use([Scrollbar]);

const ScrollCasesHorizontal = () => {
  return (
    <div className="h-64 flex items-center flex-col">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        mousewheel={true}
        scrollbar={{ draggable: true,
          dragClass:"swiper-scrollbar-drag",
          verticalClass:"swiper-scrollbar-vertical",
          dragSize:80,
          hide:false
        }}
        modules={{Scrollbar, Mousewheel}}
        className="h-[400px] w-full flex flex-col justify-start items-start"
      >
        
        <SwiperSlide>
          <div className="bg-bg-item h-32 mx-10 flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-zinc-100"></div>
            <div className="flex flex-col px-2">
                
                <div className="flex items-center gap-1 text-yellow-500">
                <p>5</p>
                <FaStar color="yellow"/>
                <strong className="text-white">Chocolato{" "}</strong>
                <p className="text-white">Hotel</p>
                </div>

                <div>
                <p className="text-xs text-zinc-500">100 metros de fachada</p>
                <p className="text-sm text-yellow-400">Entregue em 45 dias</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-bg-item h-32 mx-10 flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-zinc-100"></div>
            <div className="flex flex-col px-2">
                
                <div className="flex items-center gap-1 text-yellow-500">
                <p>5</p>
                <FaStar color="yellow"/>
                <strong className="text-white">Chocolato{" "}</strong>
                <p className="text-white">Hotel</p>
                </div>

                <div>
                <p className="text-xs text-zinc-500">100 metros de fachada</p>
                <p className="text-sm text-yellow-400">Entregue em 45 dias</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-bg-item h-32 mx-10 flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-zinc-100"></div>
            <div className="flex flex-col px-2">
                
                <div className="flex items-center gap-1 text-yellow-500">
                <p>5</p>
                <FaStar color="yellow"/>
                <strong className="text-white">Chocolato{" "}</strong>
                <p className="text-white">Hotel</p>
                </div>

                <div>
                <p className="text-xs text-zinc-500">100 metros de fachada</p>
                <p className="text-sm text-yellow-400">Entregue em 45 dias</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-bg-item h-32 mx-10 flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-zinc-100"></div>
            <div className="flex flex-col px-2">
                
                <div className="flex items-center gap-1 text-yellow-500">
                <p>5</p>
                <FaStar color="yellow"/>
                <strong className="text-white">Chocolato{" "}</strong>
                <p className="text-white">Hotel</p>
                </div>

                <div>
                <p className="text-xs text-zinc-500">100 metros de fachada</p>
                <p className="text-sm text-yellow-400">Entregue em 45 dias</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-bg-item h-32 mx-10 flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-zinc-100"></div>
            <div className="flex flex-col px-2">
                
                <div className="flex items-center gap-1 text-yellow-500">
                <p>5</p>
                <FaStar color="yellow"/>
                <strong className="text-white">Chocolato{" "}</strong>
                <p className="text-white">Hotel</p>
                </div>

                <div>
                <p className="text-xs text-zinc-500">100 metros de fachada</p>
                <p className="text-sm text-yellow-400">Entregue em 45 dias</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
      <div className="flex mt-10 gap-2 cursor-pointer">
      <p className="text-yellow-500">VER TODOS </p>
      <p className="text-white">OS CASES</p>
      </div>


    </div>
  );
};

export default ScrollCasesHorizontal;