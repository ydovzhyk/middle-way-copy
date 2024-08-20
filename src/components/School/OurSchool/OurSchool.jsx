import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import image01 from '../../../images/school/our_school/our.webp';
import image02 from '../../../images/school/our_school/our01.webp';
import image03 from '../../../images/school/our_school/our02.webp';

import Button from '../../Shared/Button';
import s from './OurSchool.module.scss';

const OurSchool = () => {
  const headerHeight = useHeaderHeight();
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  return (
    <section className={s.ourschool}>
      <div className="container">
        <div className={s.ourschool__partSchool}>
          <div className={s.ourschool__partSchoolWrapper}>
            <div className={s.ourschool__partSchoolConteiner}>
              <div className={s.ourschool__partSchoolTitleWrapper}>
                <p className={`${s.ourschool__partSchoolTitle} ${s.title}`}>
                  Путрівська приватна гімназія «Мідл Вей»
                </p>
              </div>
              <p className={`${s.ourschool__partSchoolText} ${s.text}`}>
                Ми ставимо за мету забезпечити студентів актуальною освітою, яка
                відповідає викликам сучасного світу.
              </p>
              <p className={`${s.ourschool__partSchoolText} ${s.text}`}>
                Призначення початкової школи ми вбачаємо у розвитку пізнавальної
                допитливості до навчання та цікавості до вивчення майбутніх
                навчальних курсів.
              </p>
              {/* <a
                className={s.ourschool__link}
                href="https://forms.gle/cy9uZnKGM5wDsmQn8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button text="Записатися" btnClass="btnSchoolLight" />
              </a> */}
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                duration={500}
                offset={-headerHeight - 17}
                className={s.ourschool__link}
              >
                <Button text="Записатися" btnClass="btnSchoolLight" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src={isDesctop ? image01 : isTablet ? image02 : image03}
              alt="Діти грають в садку"
              className={s.ourschool__imageSchool}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
