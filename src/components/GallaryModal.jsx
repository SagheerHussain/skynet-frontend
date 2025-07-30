import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

Modal.setAppElement("#root");

const GalleryModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  if (!images || images.length === 0) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Gallery Modal"
      className="fixed inset-0 flex items-center justify-center bg-black/90 z-[0]"
      overlayClassName="z-[9999]"
    >
      <div className="bg-black p-4 rounded-lg w-[95%] md:w-[80%] max-w-5xl mt-20">
        <button
          onClick={onClose}
          className="text-white text-3xl font-bold top-[100px] right-8 z-[99999] absolute"
        >
          &times;
        </button>

        {/* Main Image */}
        <div className="aspect-video">
          <img
            src={images[currentIndex]}
            className="rounded object-contain mx-auto h-full"
            alt={`Gallery ${currentIndex}`}
          />
        </div>

        {/* Thumbnails */}
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-4"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i} className="cursor-pointer">
              <img
                src={image}
                alt={`Thumb ${i}`}
                className={`rounded object-contain border-2 ${
                  currentIndex === i ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default GalleryModal;