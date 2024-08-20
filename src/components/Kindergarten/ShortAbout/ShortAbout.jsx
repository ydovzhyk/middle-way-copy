import achievement01 from '../../../images/kindergarten/achivment/achievement01.webp';
import achievement02 from '../../../images/kindergarten/achivment/achievement02.webp';
import achievement03 from '../../../images/kindergarten/achivment/achievement03.webp';
import achievement04 from '../../../images/kindergarten/achivment/achievement04.webp';

import s from './ShortAbout.module.scss';

const ShortAbout = () => {
  return (
    <section className={s.shortAbout}>
      <div className="container">
        <div className={s.shortAbout__content}>
          <div className={s.shortAbout__titleContent}>
            <h2 className={s.shortAbout__title}>Коротко про нас</h2>
          </div>
          <div className={s.shortAbout__partText}>
            <p className={s.shortAbout__text}>
              10 років тому був створений перший наш садочок, як осередок
              гармонійного розвитку для власних дітей та родин кому
              відгукувались так само принципи свободи, поваги до дитини, бажання
              дати дітям комфортне та безпечне розвивальне середовище.
            </p>
            <p className={s.shortAbout__text}>
              Тепер ми маємо три сучасні ліцензовані локації. Садочки працюють
              за власним контентом, в основі якого лежить класичний науковий
              метод Марії Монтессорі, дотримується базовий компонент дошкільної
              освіти, велика увага приділяється розвитку емоційного інтелекту та
              творчості дитини.
            </p>
          </div>
          <div
            className={s.shortAbout__partAchievement}
            style={{ marginBottom: '40px' }}
          >
            <ul className={s.shortAbout__partAchievementWrapper}>
              <li className={s.shortAbout__partAchievementList}>
                <img
                  src={achievement01}
                  alt="Мета"
                  className={s.shortAbout__img}
                />
                <h3 className={s.shortAbout__title}>Мета</h3>
                <div className={s.shortAbout__textContent}>
                  <p className={s.shortAbout__text}>
                    Забезпечення середовища, умов та методів для розвитку
                    збалансованої, гармонійної дитини з максимальним врахування
                    її індивідуальності
                  </p>
                </div>
              </li>
              <li className={s.shortAbout__partAchievementList}>
                <img
                  src={achievement02}
                  alt="Принципи"
                  className={s.shortAbout__img}
                />
                <h3 className={s.shortAbout__title}>Принципи</h3>
                <div className={s.shortAbout__textContent}>
                  <ul className={s.shortAbout__textList}>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      індивідуальний темп розвитку дитину
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      забезпечення вільного вибору діяльності
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      м’які рамки
                    </li>
                    <li className={s.shortAbout__text}>
                      допомога дитині в самостійному досягненні результату
                    </li>
                  </ul>
                </div>
              </li>
              <li className={s.shortAbout__partAchievementList}>
                <img
                  src={achievement03}
                  alt="Цінності"
                  className={s.shortAbout__img}
                />
                <h3 className={s.shortAbout__title}>Цінності</h3>
                <div className={s.shortAbout__textContent}>
                  <ul className={s.shortAbout__textList}>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      повага до маленької людини
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      спілкування з дитиною «на рівних»
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      психологічний комфорт дитини і педагога
                    </li>
                    <li className={s.shortAbout__text}>
                      емпатичне ставлення, емоційний інтелект
                    </li>
                  </ul>
                </div>
              </li>
              <li className={s.shortAbout__partAchievementList}>
                <img
                  src={achievement04}
                  alt="Переваги"
                  className={s.shortAbout__img}
                />
                <h3 className={s.shortAbout__title}>Переваги</h3>
                <div className={s.shortAbout__textContent}>
                  <ul className={s.shortAbout__textList}>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      легка адаптація
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      5-разове харчування
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      власна кухня
                    </li>
                    <li
                      className={s.shortAbout__text}
                      style={{ marginBottom: '10px' }}
                    >
                      еко-середовище
                    </li>
                    <li className={s.shortAbout__text}>різноманітні гуртки</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
