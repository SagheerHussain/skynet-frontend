import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AircraftDetail from "../components/AircraftDetail";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import GalleryModal from "../components/GallaryModal";
import useGsapScroll from "../hooks/useGsapScroll";

const AircraftDetailPage = () => {
  useGsapScroll();

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallary, setGallary] = useState([]);

  const openModal = (index, images) => {
    setCurrentIndex(index);
    setGallary(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AircraftDetail
            onOpenModal={openModal}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <Footer />
          <ScrollToTop />
        </div>
      </div>

      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={gallary}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
};

export default AircraftDetailPage;
