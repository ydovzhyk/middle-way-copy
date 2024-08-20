import React, { useState } from 'react';
import viber from '../../../images/social/viber.png';
import telegram from '../../../images/social/telegram.png';
import whatsup from '../../../images/social/whatsup.png';
import facebook from '../../../images/social/facebook.png';
import instagram from '../../../images/social/instagram.png';
import gmail from '../../../images/social/gmail.png';

import s from './SotialNetwork.module.scss';

const SotialNetwork = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <div className={s.sotialNetwork}>
      <a
        className={s.sotialNetwork__part}
        href="viber://chat?number=+380674474295"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={viber} alt="Viber app" className={s.sotialNetwork__img} />
      </a>
      <a
        className={s.aboutPanel__part}
        href="https://t.me/middle_way_school"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={telegram}
          alt="Telegram app"
          className={s.sotialNetwork__img}
        />
      </a>
      <a
        className={s.aboutPanel__part}
        href="https://wa.me/+380674474295"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={whatsup} alt="Whatsup app" className={s.add} />
      </a>
      <div
        className={`${s.aboutPanel__part} ${s.facebookPart}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={facebook}
          alt="Facebook app"
          className={s.sotialNetwork__img}
        />
        {showSubMenu && (
          <div className={s.subMenu}>
            <a
              className={s.sotialNetwork__text}
              href="https://www.facebook.com/school.middleway"
              target="_blank"
              rel="noreferrer noopener"
            >
              Школа
            </a>
            <a
              className={s.sotialNetwork__text}
              href="https://www.facebook.com/middleway.stolychnyy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Садок
            </a>
          </div>
        )}
      </div>
      <a
        className={s.aboutPanel__part}
        href="https://www.instagram.com/middleway_vasylkiv/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={instagram}
          alt="Instagram app"
          className={s.sotialNetwork__img}
        />
      </a>
      <a
        className={s.aboutPanel__part}
        href="mailto:middlewaychayka@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={gmail} alt="Gmail app" className={s.sotialNetwork__img} />
      </a>
    </div>
  );
};

export default SotialNetwork;
