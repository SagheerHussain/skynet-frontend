import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Thumbs,
  FreeMode,
  Keyboard,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/keyboard";
import "swiper/css/navigation";

import GallaryOne from "/images/gallary/image 1.png";
import GallaryTwo from "/images/gallary/image 2.png";
import GallaryThree from "/images/gallary/image 3.png";
import GallaryFour from "/images/gallary/image 4.png";
import GallaryFive from "/images/gallary/image 5.png";
import GallarySix from "/images/gallary/image 6.png";
import { motion } from "framer-motion";
import { HeroParallax } from "./ui/hero-parallex";

Modal.setAppElement("#root");

const videoList = [
  {
    id: 1,
    title: "Climb to FL340 in 14 Mins!",
    thumbnail: GallaryOne,
    videoUrl: "https://www.youtube.com/embed/AHF7354Fr1w?si=i_KCQVf8MgJ10GZe",
    duration: "24:10",
  },
  {
    id: 2,
    title: "Is the 940 the Ultimate TBM?",
    thumbnail: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/Bux2lUoqEow?si=NqzvBBzWuRn8i2T8",
    duration: "08:10",
  },
  {
    id: 3,
    title: "Time to Climb FL270",
    thumbnail: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/2SUY8ULXEl0?si=sSvG5KRPgp_8fq_2",
    duration: "18:18",
  },
  {
    id: 4,
    title: "Another Aviation Clip",
    thumbnail: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/YOYnQA1hN6s?si=Jafjza6UqlIRIAUO",
    duration: "12:40",
  },
  {
    id: 5,
    title: "Flight Training Review",
    thumbnail: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/pjHfNN-oKoA?si=jE3m0m-7rbRR0NIF",
    duration: "15:30",
  },
  {
    id: 6,
    title: "Test Flight Recap",
    thumbnail: GallarySix,
    videoUrl: "https://www.youtube.com/embed/86xFD4jn-MU?si=W_boDwDqvDYmHEen",
    duration: "11:00",
  },
];

const Gallary = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openHeroModal = (index) => {
    console.log(index);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(0);
  };

  return (
    <>
      <HeroParallax portfolio={products} onImageClick={openHeroModal} />

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Gallery Modal"
        className="fixed inset-0 flex items-center justify-center bg-black/90 z-[9999]"
        overlayClassName="z-[9999]"
      >
        <div className="bg-black p-4 rounded-lg w-[95%] md:w-[80%] max-w-5xl">
          <button
            onClick={closeModal}
            className="text-white text-3xl font-bold absolute top-5 right-8"
          >
            &times;
          </button>

          {/* Main Video */}
          <div className="aspect-video">
            <iframe
              src={products[currentIndex].videoUrl}
              title={products[currentIndex].src}
              allowFullScreen
              className="w-full h-full mt-10 rounded"
            ></iframe>
          </div>

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Navigation, Keyboard]}
            className="mySwiper"
            keyboard={true}
          >
            {products?.map((video, i) => (
              <SwiperSlide key={video.id} className="cursor-pointer">
                <img
                  src={video.src}
                  alt={video.title}
                  className={`rounded w-full 2xl:min-h-[300px] lg:max-h-[90px] 2xl:object-cover lg:object-contain border-2 ${
                    currentIndex === i
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>
    </>
  );
};

export default Gallary;

export const products = [
  {
    _id: 1,
    title: "Moonbeam",
    category: "",
    src: GallaryOne,
    videoUrl: "https://www.youtube.com/embed/AHF7354Fr1w?si=i_KCQVf8MgJ10GZe",
  },
  {
    _id: 2,
    title: "Moonbeam",
    category: "",
    src: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/Bux2lUoqEow?si=NqzvBBzWuRn8i2T8",
  },
  {
    _id: 3,
    title: "Moonbeam",
    category: "",
    src: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/2SUY8ULXEl0?si=sSvG5KRPgp_8fq_2",
  },
  {
    _id: 4,
    title: "Moonbeam",
    category: "",
    src: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/YOYnQA1hN6s?si=Jafjza6UqlIRIAUO",
  },
  {
    _id: 5,
    title: "Moonbeam",
    category: "",
    src: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/pjHfNN-oKoA?si=jE3m0m-7rbRR0NIF",
  },
  {
    _id: 6,
    title: "Moonbeam",
    category: "",
    src: GallarySix,
    videoUrl: "https://www.youtube.com/embed/86xFD4jn-MU?si=W_boDwDqvDYmHEen",
  },
  {
    _id: 7,
    title: "Moonbeam",
    category: "",
    src: GallaryOne,
    videoUrl: "https://www.youtube.com/embed/AHF7354Fr1w?si=i_KCQVf8MgJ10GZe",
  },
  {
    _id: 8,
    title: "Moonbeam",
    category: "",
    src: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/Bux2lUoqEow?si=NqzvBBzWuRn8i2T8",
  },
  {
    _id: 9,
    title: "Moonbeam",
    category: "",
    src: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/2SUY8ULXEl0?si=sSvG5KRPgp_8fq_2",
  },
  {
    _id: 10,
    title: "Moonbeam",
    category: "",
    src: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/YOYnQA1hN6s?si=Jafjza6UqlIRIAUO",
  },
  {
    _id: 11,
    title: "Moonbeam",
    category: "",
    src: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/pjHfNN-oKoA?si=jE3m0m-7rbRR0NIF",
  },
  {
    _id: 12,
    title: "Moonbeam",
    category: "",
    src: GallarySix,
    videoUrl: "https://www.youtube.com/embed/86xFD4jn-MU?si=W_boDwDqvDYmHEen",
  },
  {
    _id: 13,
    title: "Moonbeam",
    category: "",
    src: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/YOYnQA1hN6s?si=Jafjza6UqlIRIAUO",
  },
  {
    _id: 14,
    title: "Moonbeam",
    category: "",
    src: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/pjHfNN-oKoA?si=jE3m0m-7rbRR0NIF",
  },
  {
    _id: 15,
    title: "Moonbeam",
    category: "",
    src: GallarySix,
    videoUrl: "https://www.youtube.com/embed/86xFD4jn-MU?si=W_boDwDqvDYmHEen",
  },
];
