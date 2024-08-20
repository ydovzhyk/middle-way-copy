import { useMediaQuery } from 'react-responsive';
import image01 from '../../../images/kindergarten/complex/complex1.webp';
import image02 from '../../../images/kindergarten/complex/complex2.webp';
import image03 from '../../../images/kindergarten/complex/complex3.webp';
import image04 from '../../../images/kindergarten/complex/complex4.webp';

import s from './DevelopmentComplex.module.scss';

const DevelopmentComplex = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={s.complex}>
      <div className="container">
        <div className={s.complex__content}>
          <div className={s.complex__titleContent}>
            <h2 className={s.complex__title}>
              Комплекс розвитку дитини в садочку
            </h2>
          </div>
          <div
            className={s.complex__partText}
            style={{ marginTop: isMobile ? '80px' : '40px' }}
          >
            <p className={s.complex__text}>
              Ми подбали про унікальну систему навчання для дітей, яка включає в
              себе основні програми Монтессорі та відповідає всім нормам
              Міністерства освіти і науки України
            </p>
          </div>
          <div className={s.complex__partContent}>
            <div className={s.complex__partListContent}>
              <img
                src={image01}
                alt={'Діти навчаються'}
                className={s.complex__image}
              />
              <div className={s.complex__titleWrapper}>
                <p className={s.complex__title}>Навчання</p>
              </div>
              <div className={s.complex__textWrapper}>
                <div className={s.complex__textWrapperList}>
                  <p className={s.complex__text}>- Монтессорі педагогіка</p>
                  <p className={s.complex__text}>
                    - Індивідуальний темп і обсяг навчання
                  </p>
                </div>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>
                    Різноманітні гуртки для дітей:
                  </span>
                  <li className={s.complex__text}>
                    вивчення англійської мови з носієм
                  </li>
                  <li className={s.complex__text}>образотворча діяльність</li>
                  <li className={s.complex__text}>логоритміка</li>
                  <li className={s.complex__text}>психологія</li>
                  <li className={s.complex__text}>хореографія</li>
                  <li className={s.complex__text}>музичний блок</li>
                  <li className={s.complex__text}>карате</li>
                  <li className={s.complex__text}>кулінарія</li>
                </ul>
              </div>
            </div>
            <div className={s.complex__partListContent}>
              <img
                src={image02}
                alt={'Діти їдять яблука'}
                className={s.complex__image}
              />
              <div className={s.complex__titleWrapper}>
                <p className={s.complex__title}>Здоров'я та харчування</p>
              </div>
              <div className={s.complex__textWrapper}>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>
                    5-ти разове еко-харчування:
                  </span>
                  <li className={s.complex__text}>
                    збалансоване, вітамінізоване меню
                  </li>
                  <li className={s.complex__text}>сезонні фрукти та овочі</li>
                  <li className={s.complex__text}>органічні крупи</li>
                  <li className={s.complex__text}>
                    дієтичне м’ясо: індичка, телятина
                  </li>
                  <li className={s.complex__text}>бездріжджевий хліб</li>
                </ul>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>
                    Штатний мед-працівник:
                  </span>
                  <li className={s.complex__text}>
                    Коло з лікарем «Про здоров’я»
                  </li>
                  <li className={s.complex__text}>
                    Зовнішній огляд здоров’я дітей — Перша допомога при
                    необхідності
                  </li>
                </ul>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>Еко-середовище:</span>
                  <li className={s.complex__text}>
                    Очищення, зволоження, іонізація повітря в приміщенні
                  </li>
                  <li className={s.complex__text}>
                    Використання безфосфатних засобів для прибирання\прання
                  </li>
                  <li className={s.complex__text}>
                    Безпечні, гіпоалергення матеріали (клей, фарби, пластилін
                    тощо)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={s.complex__partContent}
            style={{ marginBottom: '40px' }}
          >
            <div className={s.complex__partListContent}>
              <img
                src={image03}
                alt={'Діти малюють'}
                className={s.complex__image}
              />
              <div className={s.complex__titleWrapper}>
                <p className={s.complex__title}>Образотворче мислення</p>
              </div>
              <div className={s.complex__textWrapper}>
                <div className={s.complex__textWrapperList}>
                  <p className={s.complex__text}>
                    Образотворче мислення розвиває уяву і виховує гарний смак з
                    дитинства. Ми вчимося малювати, ліпити, знімати кіно і
                    багато іншого
                  </p>
                </div>
                <ul className={s.complex__textList}>
                  <li className={s.complex__text}>Малювання</li>
                  <li className={s.complex__text}>Ліплення</li>
                  <li className={s.complex__text}>Танці</li>
                  <li className={s.complex__text}>Конструювання</li>
                  <li className={s.complex__text}>Аплікація</li>
                  <li className={s.complex__text}>Співи</li>
                  <li className={s.complex__text}>Казки</li>
                  <li className={s.complex__text}>Вистави / сценки</li>
                </ul>
              </div>
            </div>
            <div className={s.complex__partListContent}>
              <img
                src={image04}
                alt={'Діти займаються спортом'}
                className={s.complex__image}
              />
              <div className={s.complex__titleWrapper}>
                <p className={s.complex__title}>Фізична активність</p>
              </div>
              <div className={s.complex__textWrapper}>
                <div className={s.complex__textWrapperList}>
                  <p className={s.complex__text}>
                    Зарядки та вправи. Щоденні заняття в ігровій формі для
                    правильного фізичного розвитку дітей.
                  </p>
                </div>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>Майданчик:</span>
                  <li className={s.complex__text}>
                    вивчення англійської мови з носієм
                  </li>
                  <li className={s.complex__text}>
                    велика, затишна територія з деревами та рослинами
                  </li>
                  <li className={s.complex__text}>
                    спортивно-рухова активність, ігри на свіжому повітрі
                  </li>
                  <li className={s.complex__text}>
                    забави з прородніми матеріалами
                  </li>
                  <li className={s.complex__text}>спостереження за природою</li>
                  <li className={s.complex__text}>пізнавальна праця</li>
                  <li className={s.complex__text}>ефект «дідусевого саду»</li>
                </ul>
                <ul className={s.complex__textList}>
                  <span className={s.complex__listTitle}>
                    Поза межами садочку:
                  </span>
                  <li className={s.complex__text}>Екскурсії</li>
                  <li className={s.complex__text}>Пікніки</li>
                  <li className={s.complex__text}>Походи</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentComplex;
