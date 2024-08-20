import { useMediaQuery } from 'react-responsive';
import SotialNetwork from 'components/Header/SotialNetwork';
import GoogleMap from 'components/Shared/GoogleMap';
import { SiGooglemaps } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';

import s from './Contacts.module.scss';

const Contacts = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.contacts__content}>
          <div className={s.contacts__informationPart}>
            <h1
              className={s.contacts__title}
              style={{
                paddingBottom: '20px',
                borderBottom: '1px solid #f2f2f2',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Контактна Інформація:
            </h1>
            <div>
              <h2
                className={s.contacts__title}
                style={{
                  marginBottom: '20px',
                  textAlign: isMobile ? 'center' : 'left',
                  color: 'var(--accent-color-second)',
                }}
              >
                Школа:
                <span style={{ color: 'var(--accent-color-second)' }}></span>
              </h2>
              <div className={s.contacts__department}>
                <p
                  className={s.contacts__text}
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '0px',
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                >
                  Путрівська приватна гімназія «Мідл Вей»
                </p>
                <div className={s.contacts__iconWrapper}>
                  <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
                  <address
                    className={s.contacts__text}
                    style={{ marginLeft: '10px' }}
                  >
                    Фастівський район, с. Путрівка, вул. Газова, 8
                  </address>
                </div>
                <a href="tel:+380674474295">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 067 447 42 95
                    </span>
                  </div>
                </a>
                <a href="tel:+380679135606">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 068 220 10 09
                    </span>
                  </div>
                </a>
              </div>
              <h2
                className={s.contacts__title}
                style={{
                  marginBottom: '20px',
                  marginTop: '20px',
                  textAlign: isMobile ? 'center' : 'left',
                  color: 'var(--accent-color-kindergaten)',
                }}
              >
                Дитячий садок:
              </h2>
              <div className={s.contacts__department}>
                <p
                  className={s.contacts__text}
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '0px',
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                >
                  Локація 1. Приватний заклад дошкільної освіти «Мідл Вей»
                </p>
                <div className={s.contacts__iconWrapper}>
                  <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
                  <address
                    className={s.contacts__text}
                    style={{ marginLeft: '10px' }}
                  >
                    Фастівський район, с. Путрівка, вул. Газова, 8
                  </address>
                </div>
                <a href="tel:+380674474295">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 067 447 42 95
                    </span>
                  </div>
                </a>
                <a href="tel:+380679135606">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 067 913 56 06
                    </span>
                  </div>
                </a>
              </div>
              <div className={s.contacts__department}>
                <p
                  className={s.contacts__text}
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '0px',
                    marginTop: '20px',
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                >
                  Локація 2. Дитячий садок «Мідл Вей»
                </p>
                <div className={s.contacts__iconWrapper}>
                  <div className={s.contacts__iconContainer}>
                    <SiGooglemaps color="#f99523" size={isDesctop ? 19 : 17} />
                  </div>
                  <address
                    className={s.contacts__text}
                    style={{ marginLeft: '10px' }}
                  >
                    м. Васильків. ЖК Столичний, вул. Декабристів 151, корпус 5
                  </address>
                </div>
                <a href="tel:+380674474295">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 067 447 42 95
                    </span>
                  </div>
                </a>
                <a href="tel:+380679135606">
                  <div className={s.contacts__iconWrapper}>
                    <MdLocalPhone color="#f99523" size={isDesctop ? 19 : 17} />
                    <span
                      className={s.contacts__text}
                      style={{ marginLeft: '10px' }}
                    >
                      +38 068 220 10 09
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <h2
              className={s.contacts__title}
              style={{
                paddingTop: '20px',
                borderTop: '1px solid #f2f2f2',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Ми в соціальних мережах:
            </h2>
            <div className={s.contacts__sotial}>
              <SotialNetwork />
            </div>
          </div>
          <div className={s.contacts__mapsPart}>
            <p className={s.contacts__title} style={{ textAlign: 'center' }}>
              Школа та дитячий садок Локація 1.
            </p>
            <GoogleMap
              height={isDesctop ? '365' : isTablet ? '395' : '400'}
              width={isDesctop ? '745' : isTablet ? '420' : '100%'}
              location="1"
            />
            <p className={s.contacts__title} style={{ textAlign: 'center' }}>
              Дитячий садок Локація 2.
            </p>
            <GoogleMap
              height={isDesctop ? '365' : isTablet ? '395' : '400'}
              width={isDesctop ? '745' : isTablet ? '420' : '100%'}
              location="2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
