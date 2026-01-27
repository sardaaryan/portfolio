"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// 1. Correct Imports for Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// 2. Correct Import for Swiper Modules (Must be from 'swiper/modules')
import { Pagination } from "swiper/modules";

// 3. CSS Imports
import "swiper/css";
import "swiper/css/pagination";

// DATA
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "OdisAI",
          path: "/thumb1.jpeg",
          link: "https://odisai.net",
        },
        {
          title: "Icarus Alpha",
          path: "/thumb2.jpeg",
          link: "https://icarusalpha.com",
        },
        {
          title: "Handshake AI",
          path: "/thumb3.jpeg",
          link: "https://joinhandshake.com/",
        },
        {
          title: "Hvantage Technologies",
          path: "/thumb4.jpeg",
          link: "https://www.hvantagetechnologies.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "OdisAI",
          path: "/thumb1.jpeg",
          link: "https://odisai.net",
        },
        {
          title: "Icarus Alpha",
          path: "/thumb2.jpeg",
          link: "https://icarusalpha.com",
        },
        {
          title: "Handshake AI",
          path: "/thumb3.jpeg",
          link: "https://joinhandshake.com/",
        },
        {
          title: "Hvantage Technologies",
          path: "/thumb4.jpeg",
          link: "https://www.hvantagetechnologies.com/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      // CRITICAL FIX: Ensure explicit module passing
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.images.map((image, imageIndex) => (
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group bg-pink-50/10" key={imageIndex}>
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* IMAGE */}
                  {/* Ensure these paths exist in public/work/ or it will break */}
                  <div className="relative w-full h-full">
                    <Image src={image.path} alt={image.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" aria-hidden />

                  {/* TEXT CONTENT */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 xl:group-hover:-translate-y-12 transition-all duration-300 w-full text-center px-2">
                    <Link href={image.link} target="_blank" rel="noreferrer noopener" className="flex flex-col items-center gap-y-1 tracking-[0.2em]">
                      {/* Title */}
                      <div className="delay-100 text-[13px] font-bold uppercase text-white tracking-widest shadow-sm">{image.title}</div>

                      {/* View Project */}
                      <div className="flex items-center gap-x-2 text-[11px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-accent font-semibold">
                        <span>VIEW</span>
                        <BsArrowRight className="text-sm" aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
