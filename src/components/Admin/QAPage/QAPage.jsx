import CreateQA from './CreateQA/CreateQA';
import ListQA from './ListQA/ListQA';
import s from './QAPage.module.scss';

const ReviewsPage = () => {
  return (
    <section className={s.questionsAndAnswers}>
      <div className="container">
        <CreateQA />
        <ListQA />
      </div>
    </section>
  );
};

export default ReviewsPage;
