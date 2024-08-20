import React from 'react';
import MenuTable from './MenuTable';
import image01 from '../../../images/kindergarten/food/icons8-fruit-basket-66.png';
import image02 from '../../../images/kindergarten/food/icons8-meat-80.png';
import s from './Food.module.scss';

const Food = () => {
  return (
    <section className={s.food}>
      <div className="container">
        <div className={s.food__content}>
          <div className={s.food__titleContent}>
            <h2 className={s.food__title}>Перспективне меню</h2>
          </div>
          <div className={s.food__partText}>
            <p className={s.food__textMark}>
              У нас власна кухня, 5-разове харчування. Батьки щодня мають фото
              звіт і навіть можуть замовити додаткові порції для себе.
            </p>
          </div>
          <div className={s.food__menuContent}>
            <MenuTable />
          </div>
          <div className={s.food__markContent}>
            <div className={s.food__markPart}>
              <img
                src={image02}
                alt={"М'ясна страва"}
                className={s.food__imageMark}
              />
              <p className={s.food__textMark}>
                М'ясні страви передбачають альтернативу
              </p>
            </div>
            <div className={s.food__markPart} style={{ marginBottom: '20px' }}>
              <img
                src={image01}
                alt={'Фруктовий кошик'}
                className={s.food__imageMark}
              />
              <p className={s.food__textMark}>
                Фруктовий перекус передбачає сезонні фрукти
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
