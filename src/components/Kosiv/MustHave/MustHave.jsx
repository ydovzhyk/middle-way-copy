import Button from '../../Shared/Button';

import s from './MustHave.module.scss';

const MustHave = () => {
  return (
    <section className={s.mustHave}>
      <div className="container">
        <div className={s.mustHave__content}>
          <div className={s.mustHave__titleContent}>
            <h2 className={s.mustHave__title}>Необхідні речі</h2>
          </div>
          <div className={s.mustHave__partContent}>
            <div className={s.mustHave__textContent}>
              <ul className={s.mustHave__textTitle}>
                Перелік рекомендованого одягу та взуття:
                <li
                  className={`${s.mustHave__text} ${s.mustHave__textYes}`}
                  style={{ marginTop: '20px' }}
                >
                  спідня білизна та піжама
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  шкарпетки (мінімум 5 пар)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  купальник або плавки (для відвідування басейну)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  змінний одяг: наприклад футболки (мінімум 5 шт.) та шорти
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  кросівки або кеди (для походу в гори)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  теплий одяг (спортивний костюм/кофта)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  головний убір (кепка або бандана або баф)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  змінне взуття для кімнати: капці або сандалі (крокси)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  бажано взяти дощовик та гумові чоботи
                </li>
              </ul>
            </div>
            <div className={s.mustHave__textContent}>
              <ul className={s.mustHave__textTitle}>
                Перелік інших необхідних речей:
                <li
                  className={`${s.mustHave__text} ${s.mustHave__textYes}`}
                  style={{ marginTop: '20px' }}
                >
                  зубна щітка та паста
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  гребінець, мочалка, мило, шампунь, гель для душу
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  сухі та вологі серветки
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  протисонцевий крем
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  протисонцеві окуляри (за потреби)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  рушник (для басейну)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  засіб від комарів
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  ліхтарик
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  пляшечка для води
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  канцелярія: блокнот, ручка, пенал
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  гроші на особисті витрати
                </li>
              </ul>
            </div>
          </div>
          <p
            className={s.mustHave__textTitle}
            style={{ textAlign: 'left', width: '100%' }}
          >
            *Постільну білизну та рушники надають індивідуально в таборі
          </p>
          <div className={s.mustHave__partContent} style={{ marginTop: '0px' }}>
            <div className={s.mustHave__textContent}>
              <ul className={s.mustHave__textTitle}>
                Перелік необхідних документів:
                <li
                  className={`${s.mustHave__text} ${s.mustHave__textYes}`}
                  style={{ marginTop: '20px' }}
                >
                  свідоцтво про народження, або нотаріально завірена копія
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  копія паспорта одного з батьків
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  медична довідка - форма 079, довідка для направлення в дитячий
                  табір із зазначенням
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  відомостей про всі перенесені захворювання та щеплення
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  страховий поліс від нещасних випадків та отруєнь, або медичну
                  страховку, яку батьки оформлюють самі
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textYes}`}>
                  договір (підписується перед від’їздом)
                </li>
              </ul>
            </div>
            <div className={s.mustHave__textContent}>
              <ul className={s.mustHave__textTitle}>
                Не рекомендовано брати у табір:
                <li
                  className={`${s.mustHave__text} ${s.mustHave__textNo}`}
                  style={{ marginTop: '20px' }}
                >
                  ювелірні прикраси, дорога біжутерія, годинники
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textNo}`}>
                  косметика, парфумерія
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textNo}`}>
                  гаджети (фотоапарати, відеокамери, ігрові приставки, плеєри,
                  портативні комп'ютери та ін.)
                </li>
                <li className={`${s.mustHave__text} ${s.mustHave__textNo}`}>
                  дорогий одяг і взуття
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p
              className={s.mustHave__textTitle}
              style={{ width: '100%', marginBottom: '20px' }}
            >
              У таборі діє правило "АНТИГАДЖЕТ"
            </p>
            <p
              className={s.mustHave__textTitle}
              style={{ textAlign: 'left', width: '100%' }}
            >
              У дітей буде час на користування гаджетами у розкладі дня. Надалі
              телефони/годинники/планшети будуть знаходитись в
              спеціально-відведеному місці. Зв'язатись з дитиною протягом дня
              можна через телефон куратора.
            </p>
          </div>
          <div className={s.mustHave__btnPart}>
            <a
              className={s.mustHave__link}
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

export default MustHave;
