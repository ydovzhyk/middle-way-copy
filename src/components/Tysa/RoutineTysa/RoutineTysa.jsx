import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp/routine/routine01.webp';
import image02 from '../../../images/camp/routine/routine02.webp';
import image03 from '../../../images/camp/routine/routine03.webp';
import image04 from '../../../images/camp/routine/routine04.webp';
import image05 from '../../../images/camp/routine/routine05.webp';
import image06 from '../../../images/camp/routine/routine06.webp';

import s from './RoutineTysa.module.scss';

const RoutineTysa = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image01,
      time: '8.00 - 9.00',
      text: 'ПІДЙОМ, ЗАРЯДКА, РАНКОВІ ПРОЦЕДУРИ, СНІДАНОК',
      color: '#EE3D73',
    },
    {
      image: image02,
      time: '10.00 - 13.00',
      text: 'ЕКСКУРСІЇ, МАЙСТЕР-КЛАСИ, КОМАНДНИЙ ЧАС',
      color: '#4E8CF3',
    },
    {
      image: image03,
      time: '13.00 - 16.00',
      text: 'ОБІД, ТИХА ГОДИНА, ПОЛУДЕНОК (ФРУКТОВИЙ ПЕРЕКУС)',
      color: '#FCC950',
    },
    {
      image: image04,
      time: '16.00 - 19.00',
      text: 'КВЕСТИ, ІГРИ, ВІЛЬНИЙ ЧАС',
      color: '#EB7051',
    },
    {
      image: image05,
      time: '19.00 - 20.00',
      text: 'ВЕЧЕРЯ, ПІДГОТОВКА ДО ВЕЧІРНЬОГО ЗАХОДУ, СПІЛКУВАННЯ З РОДИНОЮ',
      color: '#AA92C4',
    },
    {
      image: image06,
      time: '20.00 - 23.00',
      text: 'ВЕЧІРНЯ ПРОГРАМА, ДИСКОТЕКА, БАГАТТЯ, КІНО-КЛУБ, ШОУ-ТАЛАНТІВ, ДРУГА ВЕЧЕРЯ, ВЕЧІРНІ ПРОЦЕДУРИ, ВІДБІЙ',
      color: '#00C3B2',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prevSlide => Math.min(prevSlide + 1, slides.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => Math.max(prevSlide - 1, 0));
  };

  return (
    <section className={s.routine}>
      <div className="container">
        <div className={s.routine__content}>
          <div className={s.routine__titleContent}>
            <h2 className={s.routine__title}>Розклад дня</h2>
          </div>
          <div className={s.routine__partContent}>
            <div className={s.routine__btnWrapper}>
              <button
                className={s.routine__btnPrev}
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <FiChevronLeft
                  size={60}
                  strokeWidth={1}
                  className={s.arrowlinkLeft}
                />
              </button>
            </div>
            <div className={s.routine__sliderContainer}>
              {slides
                .slice(
                  currentSlide,
                  isMobile ? currentSlide + 1 : currentSlide + 2
                )
                .map((slide, index) => (
                  <div
                    key={index}
                    className={s.routine__sliderCard}
                    style={{ backgroundColor: `${slide.color}` }}
                  >
                    <img
                      src={slide.image}
                      alt={`Активність ${slide.time}`}
                      className={s.program__photoContentPart}
                    />
                    <p className={s.routine__textTitle}>{`${slide.time}`}</p>
                    <p
                      className={s.routine__text}
                      style={{ marginBottom: '20px' }}
                    >{`${slide.text}`}</p>
                  </div>
                ))}
            </div>
            <div className={s.routine__btnWrapper}>
              <button
                className={s.routine__btnNext}
                onClick={nextSlide}
                disabled={currentSlide === slides.length - (isMobile ? 1 : 2)}
              >
                <FiChevronRight
                  size={60}
                  strokeWidth={1}
                  className={s.arrowlinkRigth}
                />
              </button>
            </div>
          </div>
          <div className={s.routine__btnPart} style={{ marginBottom: '40px' }}>
            <a
              className={s.routine__link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhlljHMVLaObSh0bHulzmZ_3nXUpbRG-L4iEyivXmSDOsyJw/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button text="Записатися" btnClass="btnLight" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineTysa;
