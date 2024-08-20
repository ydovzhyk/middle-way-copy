import React from 'react';
import Button from '../../Shared/Button';
import image01 from '../../../images/camp_2/accommodation/image01.webp';
import image02 from '../../../images/camp_2/accommodation/image02.webp';
import image03 from '../../../images/camp_2/accommodation/image03.webp';
import image04 from '../../../images/camp_2/accommodation/image04.webp';
import image05 from '../../../images/camp_2/accommodation/image05.webp';
import image06 from '../../../images/camp_2/accommodation/image06.webp';
import image07 from '../../../images/camp_2/accommodation/image07.webp';
import image08 from '../../../images/camp_2/accommodation/image08.webp';
import icon01 from '../../../images/camp_2/accommodation/icon01.png';
import icon02 from '../../../images/camp_2/accommodation/icon02.png';
import icon03 from '../../../images/camp_2/accommodation/icon03.png';
import icon04 from '../../../images/camp_2/accommodation/icon04.png';
import icon05 from '../../../images/camp_2/accommodation/icon05.png';
import icon06 from '../../../images/camp_2/accommodation/icon06.png';
import s from './AccommodationTysa.module.scss';

const AccommodationTysa = () => {
  return (
    <section className={s.accommodationTysa}>
      <div className="container">
        <div className={s.accommodationTysa__content}>
          <div className={s.accommodationTysa__titleContent}>
            <h2 className={s.accommodationTysa__title}>Розміщення та умови</h2>
          </div>
          <div className={s.accommodationTysa__contentPart}>
            <div className={s.accommodationTysa__textContent}>
              <p
                className={s.accommodationTysa__textTitle}
                style={{ textAlign: 'center' }}
              >
                Туристичний готельно-ресторанний комплекс "Гуцульщина" -
                ідеальне місце для літнього відпочинку.
              </p>
            </div>
            <img
              src={image01}
              alt="Рафтинг у Карпатах"
              className={s.accommodationTysa__photoContentPart}
            />
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon01}
                alt="Екологічне місце"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>
                  Екологічне середовище
                </p>
                <p className={s.accommodationTysa__text}>
                  Табір розташований в селі Чорна Тиса Рахівського району,
                  Закарпатської області.
                </p>
              </div>
            </div>
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon03}
                alt="Простора територія"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>
                  Простора територія та інфраструктура
                </p>
                <p className={s.accommodationTysa__text}>
                  Є все необхідне для комфортного та активного відпочинку:
                  закрита територія, спортивний майданчик, ігровий майданчик,
                  футбольне поле, волейбольний майданчик, форум для ватри,
                  альтанки для майстер-класів та занять на природі і більше.
                </p>
              </div>
            </div>
            <div className={s.accommodationTysa__photoContent}>
              <img
                src={image02}
                alt="Готель Писанка фасад"
                className={s.accommodationTysa__photoContentPart}
              />
              <img
                src={image03}
                alt="Готель Писанка Басейн"
                className={s.accommodationTysa__photoContentPart}
              />
              <img
                src={image04}
                alt="Готель Писанка йога"
                className={s.accommodationTysa__photoContentPart}
              />
              <img
                src={image05}
                alt="Готель Писанка доміки"
                className={s.accommodationTysa__photoContentPart}
              />
            </div>
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon02}
                alt="Комфортні кімнати"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>
                  Комфортні кімнати
                </p>
                <p className={s.accommodationTysa__text}>
                  Просторі 2-х та 3-х місні номери зі зручностями: санвузол і
                  душ, холодна та гаряча вода в кімнатах. Діти живуть в номерах
                  по групах, одного віку і однієї статі.
                </p>
              </div>
            </div>
            <div className={s.accommodationTysa__photoContent}>
              <img
                src={image06}
                alt="Їдальня"
                className={s.accommodationTysa__photoContentPart}
              />
              <img
                src={image07}
                alt="Кімната"
                className={s.accommodationTysa__photoContentPart}
              />
            </div>
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon04}
                alt="Медична допомога"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>
                  Безпечний простір і своєчасна медична допомога
                </p>
                <p className={s.accommodationTysa__text}>
                  Вся команда підготовлена по курсу ПМД. Маємо розширену
                  укомплектовану аптечку. Штат табору має санітарні книги. За
                  безпеку дітей відповідають керівники груп, які мають великий
                  досвід роботи, відповідну освіту та цілодобово перебувають
                  поруч з дітьми.
                </p>
              </div>
            </div>
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon05}
                alt="Страхування"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>Страхування</p>
                <p className={s.accommodationTysa__text}>
                  Всі діти, без виключення, мають бути застраховані батьками.
                  Страховий поліс батьки обирають самостійно зважаючи на
                  особливості програми табору, щоб поліс покривав усі можливі
                  наслідки Активного відпочинку. Якщо поліс не покриває витрати
                  на лікування дитини в разі настання нещасного випадку, табір
                  використовує кошти з власного фонду, щоб оплатити невідкладну
                  медичну допомогу дитині, після чого виставляє рахунок своїх
                  витрат батькам, які покривають ці витрати.
                </p>
              </div>
            </div>
            <div className={s.accommodationTysa__reviewContent}>
              <img
                src={icon06}
                alt="Харчування"
                className={s.accommodationTysa__icon}
              />
              <div className={s.accommodationTysa__textWrapper}>
                <p className={s.accommodationTysa__textTitle}>Харчування</p>
                <p className={s.accommodationTysa__text}>
                  Харчування 4-разове (сніданок, обід, фруктовий перекус,
                  вечеря, друга вечеря). Їжа корисна і смачна, з урахуванням
                  вимог дієтології та санітарних норм. Щодня в меню різноманітні
                  салати, перші страви, молочні продукти, свіжа домашня випічка,
                  фрукти і овочі, ягоди, морси, натуральний карпатський мед, чай
                  з карпатських трав. При особливих вимовах харчування
                  індивідуальне меню погоджується з адміністрацією. Дві затишних
                  їдальні: в середині приміщення та вулична альтанка.
                </p>
              </div>
            </div>
            <img
              src={image08}
              alt="Команда Middle Way"
              className={s.accommodationTysa__photoContentPart}
            />
          </div>
          <div className={s.accommodationTysa__btnWrapper}>
            <a
              className={s.ourschool__link}
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

export default AccommodationTysa;
