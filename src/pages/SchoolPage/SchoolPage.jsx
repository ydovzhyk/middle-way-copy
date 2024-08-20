import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';
import School from 'components/School/School';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Helmet>
        <title>
          Middle Way - приватна школа у с. Путрівка Фастівського району
        </title>
        <meta
          name="description"
          lang="uk"
          content="Приватна школа Middle Way пропонує якісну освіту для дітей. Ми розташовані в с. Путрівка Фастівського району, пропонуємо унікальну систему навчання, індивідуальний підхід, емпатичне ставлення та комфортне середовище для навчання."
        />
        <meta
          name="keywords"
          lang="uk"
          content="приватна школа, Middle Way, с. Путрівка, освіта, навчання, унікальна система, індивідуальний підхід, емпатичне ставлення, комфортне середовище, розвиток дитини, підготовка до ЗНО, вивчення англійської мови, образотворча діяльність, логоритміка, психологія, хореографія, кулінарія, вітамінізоване меню, органічні крупи, Малювання, Ліплення, Танці, Конструювання, Аплікація, Співи, Вистави / сценки, затишна територія з деревами та рослинами, ігри на свіжому повітрі, забави з прородніми матеріалами, спостереження за природою, ефект «дідусевого саду», Екскурсії, Пікніки, Походи, актуальна освіта, приватні репититори"
        />
        <link rel="canonical" href="https://middleway.in.ua/school" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/school"
          hreflang="uk"
        />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <School />
      </div>
    </>
  );
};

export default ContactsPage;
