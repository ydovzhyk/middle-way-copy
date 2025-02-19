import { Helmet } from 'react-helmet';
import Home from 'components/Home';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

const HomePage = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Helmet>
        <title>
          Middle Way - приватна школа та садок, з локаціями у с. Путрівка
          Фастівського району та у м. Васильків.
        </title>
        <meta
          name="description"
          lang="uk"
          content="Middle Way - приватна школа та садок, з локаціями у с. Путрівка Фастівського району та у м. Васильків. Ми пропонуємо якісне дошкільне виховання, а також повну середню освіту. Дізнайтеся більше про нашу програму, команду та переваги нашої освіти."
        />
        <meta
          name="keywords"
          lang="uk"
          content="приватна школа, дитячий садок, приватний дитячий садок, Middle Way, приватна школа Київ, приватний садок Васильків, приватна школа с. Путрівка, приватний садок Васильків, дошкільне виховання, навчання, Монтессорі, ранній розвиток, індивідуальний підхід до дитини, комфортне середовище, здорове харчування для дітей, гуртки, активний відпочинок, освіта, унікальна система, індивідуальний темп, обсяг навчання, вивчення англійської мови, образотворча діяльність, логоритміка, психологія, хореографія, кулінарія, вітамінізоване меню, органічні крупи, Малювання, Ліплення, Танці, Конструювання, Аплікація, Співи, Вистави / сценки, затишна територія з деревами та рослинами, ігри на свіжому повітрі, забави з прородніми матеріалами, спостереження за природою, ефект «дідусевого саду», Екскурсії, Пікніки, Походи, актуальна освіта, приватні репититори"
        />
        <link rel="canonical" href="https://middleway.in.ua" />
        <link rel="alternate" href="https://middleway.in.ua" hreflang="uk" />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <Home />
      </div>
    </>
  );
};

export default HomePage;
