import { Helmet } from 'react-helmet';
import logoSlide from '../../images/camp_2/logo_sun.webp';
import Welcome from './Welcome';
import AboutSummerCamp from './AboutSummerCamp';
import PricesSummerCamp from './PricesSummerCamp/PricesSummerCamp';
import ContactUs from './ContactUs/ContactUs';
import Appointment from 'components/Appointment';

import s from './SchoolCamp.module.scss';

const SchoolCamp = () => {
  return (
    <>
      <Helmet>
        <title>Middle Way - цікаві літні канікули з нами.</title>
        <meta
          name="description"
          lang="uk"
          content="Приватна школа Middle Way пропонує провести цікаві літні канікули у шкільному таборі на локації с. Путрівка Фастівського раону."
        />
        <meta
          name="keywords"
          lang="uk"
          content="приватна школа, Middle Way, с. Путрівка, освіта, навчання, унікальна система, індивідуальний підхід, емпатичне ставлення, комфортне середовище, розвиток дитини, підготовка до ЗНО, вивчення англійської мови, образотворча діяльність, логоритміка, психологія, хореографія, кулінарія, вітамінізоване меню, органічні крупи, Малювання, Ліплення, Танці, Конструювання, Аплікація, Співи, Вистави / сценки, затишна територія з деревами та рослинами, ігри на свіжому повітрі, забави з прородніми матеріалами, спостереження за природою, ефект «дідусевого саду», Екскурсії, Пікніки, Походи, актуальна освіта, приватні репититори, літній відпочинок дітей, цікаві канікули, літні канікули, відпочинок дітей у Карпатах, зайняти дитину літком, відпочинок та навчання, походи у гори, відпочинок в Косів, літній табір Косів, відпочинок дітей в Карпатах"
        />
        <link rel="canonical" href="https://middleway.in.ua/camp" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/camp"
          hreflang="uk"
        />
      </Helmet>
      <div className={s.schoolCamp}>
        <div className={s.schoolCamp__slide}>
          <div className={s.schoolCamp__slideBackground}>
            <div className="container">
              <div className={s.schoolCamp__slideContent}>
                <div className={s.schoolCamp__slideLogo}>
                  <img
                    src={logoSlide}
                    alt="Логотип табору"
                    className={s.schoolCamp__imageLogo}
                  />
                </div>
                <div className={s.schoolCamp__titleContent}>
                  <div className={s.schoolCamp__titleContentWrapper}>
                    <h1
                      className={s.schoolCamp__titleText}
                      style={{ textAlign: 'left' }}
                    >
                      ШКІЛЬНИЙ ТАБІР
                      <div
                        className={s.schoolCamp__titleDivider}
                        style={{ marginTop: '5px' }}
                      ></div>
                    </h1>
                  </div>
                </div>
                <div className={s.schoolCamp__contacts}>
                  <div className={s.schoolCamp__contactsWrapper}>
                    <div className={s.schoolCamp__contactsPart}>
                      <p className={s.schoolCamp__title}>
                        Приватна гімназія "Middle Way"
                      </p>
                      <p className={s.schoolCamp__title}>
                        с. Путрівка, вул. Газова 8
                      </p>
                    </div>
                    <div className={s.schoolCamp__contactsPart}>
                      <p className={s.schoolCamp__title}>(068)-220-10-09</p>
                      <p className={s.schoolCamp__title}>(067)-447-42-95</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Welcome />
        <Appointment />
        <AboutSummerCamp />
        <PricesSummerCamp />
        <ContactUs />
      </div>
    </>
  );
};

export default SchoolCamp;
