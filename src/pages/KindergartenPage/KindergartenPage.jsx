import { Helmet } from 'react-helmet';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';
import Kindergarten from '../../components/Kindergarten/Kindergarten';

const KindergartenPage = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Helmet>
        <title>
          Middle Way садок - приватний дятячий садок з локаціями у с. Путрівка
          Фастівського району та у м. Васильків.
        </title>
        <meta
          name="description"
          lang="uk"
          content="Приватний дитячих садок Middle Way пропонує якісне дошкільне виховання та навчання для дітей. Наші садочки розташовані у м. Василькові, с. Путрівка Фастівського району"
        />
        <meta
          name="keywords"
          lang="uk"
          content="дитячий садок, приватний дитячий садочок, мережа садочків, Middle Way, Київ, Васильків, с. Путрівка, дошкільне виховання, навчання, Монтессорі, ранній розвиток, індивідуальний підхід, комфортне середовище, здорове харчування, гуртки, активний відпочинок"
        />
        <link rel="canonical" href="https://middleway.in.ua/kindergaten" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/kindergaten"
          hreflang="uk"
        />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <Kindergarten />
      </div>
    </>
  );
};

export default KindergartenPage;
