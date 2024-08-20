import React, { useState, useEffect } from 'react';
import ModalWindowGallery from '../../../Shared/ModalWindowGallery/ModalWindowGallery';
import s from './Menu.module.scss';

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [lastImageIndex, setLastImageIndex] = useState(null);
  const [isModalWindow, setIsModalWindow] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const imagesPerPage = 1;
  const totalImages = 6;

  useEffect(() => {
    const importInitialImages = async () => {
      const initialImages = await importImages(0, imagesPerPage);
      setLoadedImages(initialImages);
    };

    importInitialImages();
  }, []);

  const importImages = async (start, end) => {
    const imagesArray = [];
    for (let i = start + 1; i <= end; i++) {
      const image = await import(
        `../../../../images/camp_3/about/menu/${i}.webp`
      );
      imagesArray.push(image.default);
    }
    return imagesArray;
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
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - imagesPerPage, 0));
  };

  const handleImageClick = index => {
    setSelectedImageIndex(index);
    setIsModalWindow(true);
  };

  const loadMoreImagesIfNeeded = async nextIndex => {
    if (nextIndex >= loadedImages.length && nextIndex < totalImages) {
      await handleNext();
      handleImageClick(nextIndex);
    } else {
      setCurrentIndex(nextIndex);
    }
    if (nextIndex === totalImages - 1) {
      setLastImageIndex(nextIndex);
    }
  };

  const syncPrevImage = prevIndex => {
    if (prevIndex === -1) {
      setCurrentIndex(5);
    } else {
      setCurrentIndex(prevIndex);
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
    <div className={s.menu}>
      <div className={s.imageContainer}>{renderImages()}</div>
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
    </div>
  );
};

export default Menu;
