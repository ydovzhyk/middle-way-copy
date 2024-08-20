import CreateReview from './CraeteReview/CreateReview';
import WhatCanWeSay from 'components/Home/WhatCanWeSay';

import s from './ReviewsPage.module.scss';

const ReviewsPage = () => {
  return (
    <section className={s.reviewsPage}>
      <div className="container">
        <CreateReview />
        <WhatCanWeSay />
      </div>
    </section>
  );
};

export default ReviewsPage;
