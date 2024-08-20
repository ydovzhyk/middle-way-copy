import { Helmet } from 'react-helmet';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

const AboutUsPage = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Helmet>
        <title>Middle Way - Про нас</title>
        <meta
          name="description"
          lang="uk"
          content="Дізнайтеся більше про Middle Way - приватна школа та садок, з локаціями у с. Путрівка
          Фастівського району та у м. Васильків. Ми маємо ліцензії на діяльність, пропонуємо унікальні програми та напрямки розвитку. Знайдіть підходи до вашої дитини та допоможіть їй розкрити свій потенціал."
        />
        <meta
          name="keywords"
          lang="uk"
          content="про нас, Middle Way, мережа садочків, приватна школа, Київ, Васильків, с. Путрівка, с. Чайки, ліцензії на діяльність, унікальні програми, напрямки розвитку, індивідуальний підхід, розкриття потенціалу, якісне навчання, Монтессорі, ранній розвиток, освіта"
        />
        <link rel="canonical" href="https://middleway.in.ua/about" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/about"
          hreflang="uk"
        />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}></div>
    </>
  );
};

export default AboutUsPage;
