import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Shared/Button';

import s from './NotFound.module.scss';

const NotFound = ({ textContent, backLink, classComp, text }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    setIsDisplayed(true);
  }, [text]);

  if (!isDisplayed) {
    return null;
  }

  return (
    <div className={s[classComp]}>
      <div className="container">
        <div className={s.window}>
          <div className={s.boo}>
            <div className={s.face} id="face"></div>
          </div>
          <div className={s.shadow}></div>
          <h1 className={s.title}>Oh! 404 error page</h1>
          <p className={s.txt}>{textContent}</p>
          {backLink && (
            <Link to={backLink} className={s.btnContent}>
              <Button text="Повернутися назад" btnClass="btnDark" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
