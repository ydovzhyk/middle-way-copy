import React, { useRef, useState, useEffect } from 'react';
import { TfiClose } from 'react-icons/tfi';
import s from './ModalWindowGallery.module.scss';

const ModalWindowGallery = ({
  index,
  images,
  lastImageIndex,
  closeModal,
  loadMoreImagesIfNeeded,
  syncPrevImage,
}) => {
  const modalRef = useRef();
  const [selectedImageIndex, setSelectedImageIndex] = useState(index);

  useEffect(() => {
    setSelectedImageIndex(index);
  }, [images, index]);

  const handleCloseModal = () => {
    closeModal(false);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === 0) return;
    syncPrevImage(selectedImageIndex - 1);
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNextImage = async () => {
    await loadMoreImagesIfNeeded(selectedImageIndex + 1);
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  return (
    <div className={s.modalWindow} ref={modalRef}>
      <button className={s.modalWindow__closeButton} onClick={handleCloseModal}>
        <TfiClose color="#ffffff" size={20} />
      </button>
      <div className={s.modalWindow__wrapper}>
        <div className={s.modalWindow__photoContainer}>
          <img
            src={images[selectedImageIndex]}
            alt={`Наше життя картка ${selectedImageIndex}`}
            className={s.image}
          />
        </div>
      </div>
      <div className={s.modalWindow__buttonContainer}>
        <button
          className={s.modalWindow__button}
          onClick={handlePrevImage}
          disabled={selectedImageIndex === 0}
        >
          Назад
        </button>
        <button
          className={s.modalWindow__button}
          onClick={handleNextImage}
          disabled={selectedImageIndex === lastImageIndex}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default ModalWindowGallery;
