import image01 from '../../../images/school/choose_us/Picture01.webp';
import image02 from '../../../images/school/choose_us/Picture02.webp';
import image03 from '../../../images/school/choose_us/Picture03.webp';
import image04 from '../../../images/school/choose_us/Picture04.webp';

import s from './СhooseUs.module.scss';

const СhooseUs = () => {
  return (
    <section className={s.chooseUs}>
      <div className="container">
        <div className={s.chooseUs__content}>
          <div className={s.chooseUs__titleContent}>
            <h2 className={s.chooseUs__title}>Чому обирають нас</h2>
          </div>
          <div className={s.chooseUs__textContent}>
            <p className={s.chooseUs__textTitle}>
              Ми створили середовище для повноцінного інтелектуального, творчого
              та фізичного розвитку дитини, спроможної реалізувати власний
              потенціал
            </p>
          </div>
          <div className={s.chooseUs__partContent}>
            <div className={s.chooseUs__partBox}>
              <div className={s.chooseUs__partBoxWrapper}>
                <p className={s.chooseUs__textTitlePart}>ЗНАННЯ ТА НАВИЧКИ</p>
                <ul className={s.chooseUs__text} style={{ textAlign: 'left' }}>
                  <li>Професійна команда</li>
                  <li>Навчальні курси</li>
                  <li>Проєкти</li>
                  <li>Система мотивації</li>
                  <li>Тематичні тижні</li>
                </ul>
              </div>
            </div>
            <div className={s.chooseUs__partBox}>
              <img
                src={image01}
                alt="Діти навчаються"
                className={s.chooseUs__image}
              />
            </div>
            <div className={s.chooseUs__partBox}>
              <div className={s.chooseUs__partBoxWrapper}>
                <p className={s.chooseUs__textTitlePart}>КОМФОРТ ТА РОЗВИТОК</p>
                <ul className={s.chooseUs__text} style={{ textAlign: 'left' }}>
                  <li>Гуртки та секції</li>
                  <li>Збалансоване харчування</li>
                  <li>Простір: приміщення та наповнення</li>
                  <li>Прогулянки</li>
                </ul>
              </div>
            </div>
            <div className={s.chooseUs__partBox}>
              <img
                src={image02}
                alt="Хлопчик відповідає біля дошки"
                className={s.chooseUs__image}
              />
            </div>
            <div className={s.chooseUs__partBox}>
              <img
                src={image03}
                alt="Черговий лікар"
                className={s.chooseUs__image}
              />
            </div>
            <div className={s.chooseUs__partBox}>
              <div className={s.chooseUs__partBoxWrapper}>
                <p className={s.chooseUs__textTitlePart}>БЕЗПЕКА</p>
                <ul className={s.chooseUs__text} style={{ textAlign: 'left' }}>
                  <li>Ліцензія МОН</li>
                  <li>Пройдені перевірки</li>
                  <li>Закрита територія</li>
                  <li>Мед. працівник та навчений персонал надавати ПМД</li>
                  <li>Підтримка психолога</li>
                </ul>
              </div>
            </div>
            <div className={s.chooseUs__partBox}>
              <img
                src={image04}
                alt="Діти з батьками"
                className={s.chooseUs__image}
              />
            </div>
            <div
              className={s.chooseUs__partBox}
              style={{ marginBottom: '40px' }}
            >
              <div className={s.chooseUs__partBoxWrapper}>
                <p className={s.chooseUs__textTitlePart}>ВЗАЄМОДІЯ З РОДИНОЮ</p>
                <ul className={s.chooseUs__text} style={{ textAlign: 'left' }}>
                  <li>Мобільний додаток школи</li>
                  <li>Менторський супровід</li>
                  <li>Спільні свята</li>
                  <li>Додаткові послуги</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default СhooseUs;
