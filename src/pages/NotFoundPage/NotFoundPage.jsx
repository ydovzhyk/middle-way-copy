import { useLocation } from 'react-router-dom';
import NotFound from 'components/NotFound/NotFound';

import s from '../../components/NotFound/NotFound.module.scss';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/`;

  return (
    <div className={s.container}>
      <NotFound
        textContent={'Нам не вдалося знайти сторінку, яку ви шукали.'}
        backLink={backLinkHref}
        classComp={'booWrapper'}
      />
    </div>
  );
};

export default NotFoundPage;
