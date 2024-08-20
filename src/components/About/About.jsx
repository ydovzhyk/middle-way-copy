import { Helmet } from 'react-helmet';
// import { useMediaQuery } from 'react-responsive';

import s from './About.module.scss';

const About = () => {
  // const isDesctop = useMediaQuery({ minWidth: 1280 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.about__content}>
          <div className={s.about__part}>
            <Helmet>
              <title>About Us - Our Values</title>
              <meta
                name="description"
                content="Discover the values that drive Art Studio Dental Clinic in Spain."
              />
              <meta
                name="description"
                lang="es"
                content="Descubre los valores que impulsan Art Studio Dental Clinic en España."
              />
            </Helmet>
          </div>
        </div>
      </div>
      <div className={s.about__part}>
        <Helmet>
          <title>About Us - Our Mission</title>
          <meta
            name="description"
            content="Learn about the mission of Art Studio Dental Clinic in Spain."
          />
          <meta
            name="description"
            lang="es"
            content="Aprende sobre la misión de Art Studio Dental Clinic en España."
          />
        </Helmet>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default About;
