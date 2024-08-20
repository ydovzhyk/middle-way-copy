import Prices from '../../components/Prices';
import { Helmet } from 'react-helmet';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

const PricesPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Helmet>
        <title>Middle Way - Ціни</title>
        <meta
          name="description"
          lang="uk"
          content="Дізнайтеся про вартість навчання в Middle Way - мережі дитячих садочків та приватній школі, розташованих біля Києва. Ми пропонуємо гнучку систему оплати та зручні умови для вас та вашої дитини."
        />
        <meta
          name="keywords"
          lang="uk"
          content="ціни на навчання у школі, ціни на навчання дитячий садок, Middle Way, мережа садочків, приватна школа, Київ, Васильків, с. Путрівка, с. Чайки, вартість навчання, гнучка система оплати, зручні умови, якісне навчання, Монтессорі, ранній розвиток, освіта"
        />
        <link rel="canonical" href="https://middleway.in.ua/prices" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/prices"
          hreflang="uk"
        />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <Prices />
      </div>
    </>
  );
};

export default PricesPage;
