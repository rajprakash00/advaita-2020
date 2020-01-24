import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Photos } from "./Photos";

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <section className="gallery_container">
      <h1>Gallery 2K19</h1>
      <div className="old_gallery">
        <Gallery photos={Photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Photos.map(x => ({
                  ...x
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
};

export default ImageGallery;
