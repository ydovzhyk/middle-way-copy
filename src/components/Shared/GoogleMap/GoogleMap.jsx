import React, { Suspense } from 'react';
import Loader from '../Loader';

import s from './GoogleMap.module.scss';

const GoogleMap = ({ width, height, location }) => {
  return (
    <div className={s.maps}>
      {location === '1' && (
        <Suspense fallback={<Loader />}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159.6011915195199!2d30.267112911166112!3d50.205651038058576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b10426a7c61d%3A0xac7c6ef55d939c10!2sTov%20%22Pryvatnyy%20Zaklad%20Doshkil%CA%B9noyi%20Osvity%20%22Midl%20Vey%22!5e0!3m2!1sru!2sua!4v1715357507226!5m2!1sru!2sua"
            width={width ? `${width}px` : '100%'}
            height={height ? `${height}px` : '100%'}
            title="googleMap"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Suspense>
      )}
      {location === '2' && (
        <Suspense fallback={<Loader />}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.059632086649!2d30.314861976839694!3d50.216106104209075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b1a8f987eb87%3A0x477bb1f614cf5a8b!2zTWlkZGxld2F5INCW0JogItCh0YLQvtC70LjRh9C90LjQuSI!5e0!3m2!1suk!2sua!4v1715357748540!5m2!1suk!2sua"
            width={width ? `${width}px` : '100%'}
            height={height ? `${height}px` : '100%'}
            title="googleMap"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Suspense>
      )}
    </div>
  );
};

export default GoogleMap;
