import React, { useState, useEffect, useRef } from 'react';
import { useHeaderHeight } from '../../helpers/HeaderContext/HeaderContext';
import ModalWindowGallery from '../../Shared/ModalWindowGallery/ModalWindowGallery';
import Loader from '../../Shared/Loader';
import s from './Gallery.module.scss';

const Gallery = () => {
  const catalogRef = useRef(null);
  const headerHeight = useHeaderHeight();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [lastImageIndex, setLastImageIndex] = useState(null);
  const [isModalWindow, setIsModalWindow] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imagesPerPage = 4;
  const totalImages = 16;

  //Генеруємо індекси фотографій для переключеня групи
  const generateIndices = (imagesPerPage, totalImages) => {
    const indices = [];
    for (let i = imagesPerPage; i < totalImages; i += imagesPerPage) {
      indices.push(i);
    }
    return indices;
  };
  const specialIndices = generateIndices(imagesPerPage, totalImages);

  useEffect(() => {
    const importInitialImages = async () => {
      setIsLoading(true);
      const initialImages = await importImages(0, imagesPerPage);
      setLoadedImages(initialImages);
      setIsLoading(false);
    };

    importInitialImages();
  }, []);

  const importImages = async (start, end) => {
    const imagesArray = [];
    for (let i = start + 1; i <= end; i++) {
      const image = await import(`../../../images/school/gallery/${i}.webp`);
      imagesArray.push(image.default);
    }
    return imagesArray;
  };

  const scrollToElement = element => {
    if (element.current) {
      const offsetTop =
        element.current.getBoundingClientRect().top +
        window.scrollY -
        headerHeight +
        40;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = async () => {
    const nextIndex = currentIndex + imagesPerPage;
    const nextImagesEndIndex = Math.min(nextIndex + imagesPerPage, totalImages);

    if (nextImagesEndIndex > loadedImages.length) {
      const newImages = await importImages(
        loadedImages.length,
        nextImagesEndIndex
      );
      setLoadedImages(prevImages => [...prevImages, ...newImages]);
    }

    setCurrentIndex(nextIndex);
    scrollToElement(catalogRef);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - imagesPerPage, 0));
    scrollToElement(catalogRef);
  };

  const handleImageClick = index => {
    setSelectedImageIndex(index);
    setIsModalWindow(true);
  };

  const loadMoreImagesIfNeeded = async nextIndex => {
    if (nextIndex >= loadedImages.length && nextIndex < totalImages) {
      await handleNext();
      setSelectedImageIndex(nextIndex);
    } else {
      if (specialIndices.includes(nextIndex)) {
        setCurrentIndex(nextIndex);
      }
    }
    if (nextIndex === totalImages - 1) {
      setLastImageIndex(nextIndex);
    }
  };

  const syncPrevImage = prevIndex => {
    let newIndex = prevIndex + 1;
    if (specialIndices.includes(newIndex)) {
      setCurrentIndex(prevIndex => Math.max(prevIndex - imagesPerPage, 0));
    }
  };

  const renderImages = () => {
    const endIndex = Math.min(
      currentIndex + imagesPerPage,
      loadedImages.length
    );
    return loadedImages.slice(currentIndex, endIndex).map((image, index) => (
      <div
        className={s.image}
        key={currentIndex + index}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => handleImageClick(currentIndex + index)}
      />
    ));
  };

  return (
    <section ref={catalogRef} className={s.gallery}>
      <div className="container">
        <div className={s.gallery__content}>
          <div className={s.gallery__titleContent}>
            <h2 className={s.gallery__title}>Галерея</h2>
          </div>
          {isLoading && <Loader />}
          {!isLoading && (
            <div className={s.imageContainer}>{renderImages()}</div>
          )}
          <div className={s.navigation}>
            <button
              className={s.btn}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Назад
            </button>
            <button
              className={s.btn}
              onClick={handleNext}
              disabled={currentIndex + imagesPerPage >= totalImages}
            >
              Вперед
            </button>
          </div>
        </div>
      </div>
      {isModalWindow && (
        <ModalWindowGallery
          index={selectedImageIndex}
          images={loadedImages}
          lastImageIndex={lastImageIndex}
          closeModal={() => setIsModalWindow(false)}
          loadMoreImagesIfNeeded={loadMoreImagesIfNeeded}
          syncPrevImage={syncPrevImage}
        />
      )}
    </section>
  );
};

export default Gallery;
