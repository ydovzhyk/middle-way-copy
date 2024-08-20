import { useMediaQuery } from 'react-responsive';
import CreateQA from 'components/Admin/QAPage/CreateQA/CreateQA';
import ListQA from 'components/Admin/QAPage/ListQA/ListQA';
import s from './QA.module.scss';

const QA = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={s.question}>
      <div className="container">
        <div className={s.question__content}>
          <div className={s.question__titleContent}>
            <h2 className={s.question__title}>
              {isMobile
                ? 'Відповіді на питання'
                : 'Відповіді на популярні питання'}
            </h2>
          </div>
          <div className={s.question__mainPart}>
            <div className={s.question__mainAnswer}>
              <ListQA />
            </div>
            <div className={s.question__mainQuestion}>
              <CreateQA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QA;
