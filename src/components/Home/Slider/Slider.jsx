import { useMediaQuery } from 'react-responsive';
import videoUrl from '../../../media/slider/file.mp4';
import image from '../../../images/slider.webp';

import s from './Slider.module.scss';

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={s.slider}>
      <video autoPlay loop muted poster={image} preload="auto">
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>
      <div className={s.slider__content}>
        <div className={s.slider__parts}>
          <div className={s.slider__sloganPart}>
            {!isMobile && (
              <p className={s.slider__mainTitle}>
                Грай · Досліджуй · Надихайся
              </p>
            )}
            {isMobile && (
              <p className={s.slider__mainTitle}>Грай Досліджуй Надихайся</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
