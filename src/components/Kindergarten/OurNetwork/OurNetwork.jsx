import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useHeaderHeight } from 'components/helpers/HeaderContext/HeaderContext';
import kindergatenNetwork from '../../../images/kindergarten/kindergarten_network.webp';
import kindergatenNetwork01 from '../../../images/kindergarten/kindergarten_network01.webp';
import kindergatenNetwork02 from '../../../images/kindergarten/kindergarten_network02.webp';

import Button from '../../Shared/Button';
import s from './OurNetwork.module.scss';

const OurNetwork = () => {
  const headerHeight = useHeaderHeight();
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <section className={s.ournetwork}>
      <div className="container">
        <div className={s.ournetwork__partNetwork}>
          <div className={s.ournetwork__partNetworkWrapper}>
            <div className={s.ournetwork__partNetworkConteiner}>
              <div className={s.ournetwork__partNetworkTitleWrapper}>
                <p className={`${s.ournetwork__partNetworkTitle} ${s.title}`}>
                  Дитячий садочок:
                </p>
              </div>
              <ul className={s.ournetwork__partNetworkList}>
                <li className={s.ournetwork__partNetworkListDetail}>
                  <div className={s.ournetwork__partNetworkListWrapper}>
                    <p className={`${s.ournetwork__partNetworkName} ${s.text}`}>
                      Приватний заклад дошкільної освіти «Мідл Вей»,
                    </p>
                    <p
                      className={`${s.ournetwork__partNetworkAddress} ${s.text}`}
                    >
                      Фастівський район, с. Путрівка, вул. Газова, 8
                    </p>
                  </div>
                </li>
                <li className={s.ournetwork__partNetworkListDetail}>
                  <div className={s.ournetwork__partNetworkListWrapper}>
                    <p className={`${s.ournetwork__partNetworkName} ${s.text}`}>
                      Дитячий садок «Мідл Вей»
                    </p>
                    <p
                      className={`${s.ournetwork__partNetworkAddress} ${s.text}`}
                    >
                      м. Васильків. ЖК Столичний, вул. Декабристів 151, корпус 5
                    </p>
                  </div>
                </li>
              </ul>
              <p className={`${s.ournetwork__partNetworkText} ${s.text}`}>
                Усіх, хто бажає познайомитися ближче та шукає садок для своєї
                дитини, ми запрошуємо на зустріч, де презентуємо садочок, його
                концепцію, комплекс розвитку, умови та багато іншого
              </p>
              <Link
                to="appointment"
                spy={true}
                smooth={true}
                duration={500}
                offset={-headerHeight - 17}
                className={s.slide__link}
              >
                <Button text="Записатися" btnClass="btnDark" />
              </Link>
              {/* <a
                className={s.slide__link}
                href="https://forms.gle/7SNCNZ8cfaL7bbFr5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button text="Записатися" btnClass="btnDark" />
              </a> */}
            </div>
          </div>
          <div>
            <img
              src={
                isDesctop
                  ? kindergatenNetwork
                  : isTablet
                  ? kindergatenNetwork01
                  : kindergatenNetwork02
              }
              alt="Діти грають в садку"
              className={s.ournetwork__imageNetwork}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
