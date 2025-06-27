import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import Travel from './Travel';
import Progrem from './Program';
import Accommodation from './Accommodation';
import Routine from './Routine';
import RoutineTysa from '../Tysa/RoutineTysa/RoutineTysa';
import MustHave from './MustHave';
import Prices from './Prices';
import Catalog from '../Tysa/Catalog/Catalog';
import logoSlide from '../../images/camp/logo_white.png';
import useImagePreload from 'components/helpers/useImagePreload';

import s from './Kosiv.module.scss';

const Kosiv = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useImagePreload('../../images/camp/camp.webp');
  return (
    <>
      <Helmet>
        <title>
          Middle Way - цікаві літні канікули з нами. Відпочинок в Карпатах.
        </title>
        <meta
          name="description"
          lang="uk"
          content="Приватна школа Middle Way пропонує провести цікаві літні канікули у Карпатах."
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
      <div className={s.camp}>
        <div className={s.camp__slide}>
          <div className={s.camp__slideBackground}>
            <div className="container">
              <div className={s.camp__slideContent}>
                <div className={s.camp__slideLogo}>
                  <img
                    src={logoSlide}
                    alt="Логотип табору"
                    className={s.camp__imageLogo}
                  />
                </div>
                <div className={s.camp__titleContent}>
                  <div className={s.camp__titleContentWrapper}>
                    <h2 className={s.camp__titleText}>
                      ДИТЯЧИЙ ТАБІР <br />
                      <span className={s.camp__titleTextSecond}>
                        В КАРПАТАХ
                      </span>
                      <div className={s.camp__titleDivider}></div>
                      <p className={s.camp__titleTextSecond}>
                        ДО ЗУСТРІЧІ В{' '}
                        <span className={s.camp__titleAddText}>2025</span> РОЦІ!
                      </p>
                      <p
                        className={s.camp__titleTextSecond}
                        style={{ color: 'transparent' }}
                      >
                        ДРУГА ЗМІНА 19-29 ЧЕРВНЯ
                      </p>
                    </h2>
                  </div>
                </div>
                <div className={s.camp__contacts}>
                  <div className={s.camp__contactsWrapper}>
                    <div className={s.camp__contactsPart}>
                      <p className={s.camp__title}>
                        Приватна гімназія "Middle Way"
                      </p>
                      <p className={s.camp__title}>
                        с. Путрівка, вул. Газова 8
                      </p>
                    </div>
                    <div className={s.camp__contactsPart}>
                      <p className={s.camp__title}>(068)-220-10-09</p>
                      <p className={s.camp__title}>(067)-447-42-95</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Travel />
        <Progrem />
        <Accommodation />
        {!isMobile && <Routine />}
        {isMobile && <RoutineTysa />}
        <MustHave />
        <Prices />
        <Catalog />
      </div>
    </>
  );
};

export default Kosiv;
