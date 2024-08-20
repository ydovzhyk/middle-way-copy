import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import image01 from '../../../images/main/school_main.webp';
import image02 from '../../../images/main/kindergarten_main.webp';

import s from './MainSloganPart.module.scss';

const MainSloganPart = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isActive, setIsActive] = useState('school');

  return (
    <section className={s.mainSloganPart}>
      <div className="container">
        <div className={s.mainSloganPart__partSchool}>
          <div className={s.mainSloganPart__partSchoolTitleWrapper}>
            <p className={s.mainSloganPart__mainTitle}>«MIDDLE WAY»</p>
            <p
              className={s.mainSloganPart__mainText}
              style={{ marginTop: '-10px' }}
            >
              Ми створюємо передові умови для навчання і зростання дітей!
            </p>
            <p className={s.mainSloganPart__mainSecondText}>
              Middle Way заснована на переконанні, що кожна дитина є унікальною,
              талановитою та допитливою від природи.
            </p>
            <p className={s.mainSloganPart__mainSecondText}>
              Ми надаємо якісну освіту, необхідну свободу та повагу, щоб
              розвивати впевненість у собі і любов до життя.
            </p>
            <p className={s.mainSloganPart__mainSecondText}>
              Наша мета — допомогти дітям досягати успіху та бути щасливими,
              змінюючи світ на краще.
            </p>
          </div>
          <div className={s.mainSloganPart__contant}>
            {!isMobile && (
              <div className={s.mainSloganPart__imagePart}>
                <img
                  src={isActive === 'school' ? image01 : image02}
                  alt={`Діти грають у дитячому закладі ${isActive}`}
                  className={s.mainSloganPart__image}
                />
              </div>
            )}
            <div className={s.mainSloganPart__btnPart}>
              <button
                className={`${s.button} ${s.schoolBtn} ${
                  isActive === 'school' ? s.activeButton : ''
                }`}
                onClick={() => setIsActive('school')}
              >
                <span
                  className={s.mainSloganPart__btnText}
                  style={{ marginLeft: isMobile ? '0px' : '20px' }}
                >
                  Школа
                </span>
              </button>
              <button
                className={`${s.button} ${s.kindergartenBtn} ${
                  isActive === 'kindergarten' ? s.activeButton : ''
                }`}
                onClick={() => setIsActive('kindergarten')}
              >
                <span
                  className={s.mainSloganPart__btnText}
                  style={{ marginLeft: isMobile ? '0px' : '20px' }}
                >
                  Дитячий садок
                </span>
              </button>
            </div>
            <div
              className={s.mainSloganPart__contantDescription}
              style={{
                backgroundColor:
                  isActive === 'school'
                    ? 'var(--accent-color-first)'
                    : 'var(--accent-color-kindergaten)',
              }}
            >
              {isActive === 'school' && (
                <div className={s.mainSloganPart__contantWrapper}>
                  <p className={s.mainSloganPart__contantMainText}>
                    Middle Way школа — це спільнота однодумців, яка орієнтована
                    на інтелектуальний, фізичний та духовний розвиток дітей.
                  </p>
                  <p className={s.mainSloganPart__contantSecondText}>
                    У Middle Way ми приділяємо особливу увагу академічним
                    успіхам, спортивним заняттям та естетичному вихованню. Наша
                    мета – виховувати людей з характером та гідністю, надаючи їм
                    всі необхідні навички та здібності для внесення позитиву в
                    суспільство, в якому вони живуть і в майбутньому будуть
                    працювати.
                  </p>
                  <NavLink to="/" title="Перейти до сторінки Школа">
                    <span className={s.mainSloganPart__contantMainText}>
                      Перейти на сторінку школи
                    </span>
                  </NavLink>
                </div>
              )}
              {isActive === 'kindergarten' && (
                <div className={s.mainSloganPart__contantWrapper}>
                  <p className={s.mainSloganPart__contantMainText}>
                    Дитячий садок (від 2,5 до 6 років)
                  </p>
                  <p className={s.mainSloganPart__contantSecondText}>
                    У нашому дитячому садку діти – це унікальні особистості, які
                    мають можливість досліджувати та відкривати для себе світ у
                    безпечному, турботливому і захоплюючому середовищі. Ми
                    віримо, що таке навчання дозволяє дітям рости і розвиватися
                    у власному темпі, зберігаючи і розвиваючи гідність,
                    самооцінку і власний потенціал. Запрошуємо вас зв'язатися з
                    нами в будь-який час – ми радо познайомимося з вами та вашим
                    малюком!
                  </p>
                  <NavLink to="/kindergaten" title="Перейти до сторінки Садок">
                    <span className={s.mainSloganPart__contantMainText}>
                      Перейти на сторінку садочку
                    </span>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSloganPart;
