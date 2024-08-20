import Contacts from 'components/Contacts';
import { Helmet } from 'react-helmet';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

const ContactsPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Helmet>
        <title>Middle Way - Контакти</title>
        <meta
          name="description"
          lang="uk"
          content="Зв'яжіться з Middle Way - приватна школа та садок, розташованими біля Києва. Дізнайтеся нашу повну адресу, номери телефонів та перегляньте карту Google для зручного відвідування наших закладів."
        />
        <meta
          name="keywords"
          lang="uk"
          content="контакти, Middle Way, приватний садочок, приватна школа, Київ, Васильків, с. Путрівка, адреса, номери телефонів, карта Google, зручне відвідування, зв'язок з нами"
        />
        <link rel="canonical" href="https://middleway.in.ua/contacts" />
        <link
          rel="alternate"
          href="https://middleway.in.ua/contacts"
          hreflang="uk"
        />
      </Helmet>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <Contacts />
      </div>
    </>
  );
};

export default ContactsPage;
