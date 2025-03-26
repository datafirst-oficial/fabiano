'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export function Slider({carouselData}: {carouselData: string[]}) {

    return (
        <Swiper
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                1000: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                }
            }}
            className="w-full mySwiper flex items-center"
        >
            {carouselData.map((item, index) => (
                <SwiperSlide className="w-[256px]" key={index}>
                    <div className="w-[256px]">
                        <Image
                            src={`/images/test/${item}.png`}
                            alt="Integrante Abel"
                            width={256}
                            height={256}
                            layout="cover"
                            className="rounded-xl h-full"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export function Slider2({carouselData}: {carouselData: string[]}) {

    return (
        <Swiper
            spaceBetween={8}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 1000,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                1000: {
                    slidesPerView: 8
                },
                500: {
                    slidesPerView: 8
                },
                300: {
                    slidesPerView: 8
                }
            }}
            className="w-full mySwiper flex items-center"
        >
            {carouselData.map((item, index) => (
                <SwiperSlide className="w-[200px] sm:w-[356px]" key={index}>
                    <div className="relative h-[256px] w-[200px] sm:w-[356px] sm:h-[356px]">
                        <Image
                            src={`/images/actions/${item}.png`}
                            alt="Imagem de ação da Malu"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-sm h-full"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}