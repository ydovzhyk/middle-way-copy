import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoCloseSharp } from 'react-icons/io5';

import s from './EventDetails.module.scss';

const EventDetails = ({ event, onClose }) => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photo, setPhoto] = useState(event.photos[currentIndex]);
  const [isShowBtn, setIsShowBtn] = useState(true);

  useEffect(() => {
    setPhoto(event.photos[currentIndex]);
  }, [currentIndex, event.photos]);

  useEffect(() => {
    setCurrentIndex(0);
    if (event.photos.length === 1) {
      setIsShowBtn(false);
    } else {
      setIsShowBtn(true);
    }
  }, [event.photos]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className={s.eventDetails}>
      <button className={s.eventDetails__closeButton} onClick={onClose}>
        <IoCloseSharp
          size={isDesctop ? 35 : 25}
          style={{ marginLeft: '1px', marginTop: '1px' }}
        />
      </button>
      <p className={s.eventDetails__text} style={{ fontWeight: '700' }}>
        {event.date}
      </p>
      <h3
        className={s.eventDetails__subjectTitle}
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        {event.subject}
      </h3>
      <div className={s.eventDetails__eventPhoto}>
        <img
          src={photo}
          alt="Фото події"
          className={s.eventDetails__image}
          style={{ marginBottom: isShowBtn ? '0px' : '20px' }}
        />
        {isShowBtn && (
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
              disabled={currentIndex + 1 === event.photos.length}
            >
              Вперед
            </button>
          </div>
        )}
      </div>
      <p className={s.eventDetails__descriptionText}>{event.description}</p>
    </div>
  );
};

export default EventDetails;
