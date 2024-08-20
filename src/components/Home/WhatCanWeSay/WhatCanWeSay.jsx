import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  getReviewsData,
  deleteReview,
} from '../../../redux/technical/technical-operations';
import {
  getTotalPagesReview,
  getReviews,
  getMessageTechnical,
  getErrorTechnical,
} from '../../../redux/technical/technical-selectors';
import { saveEditReview } from '../../../redux/technical/technical-slice';
import { useHeaderHeight } from '../../helpers/HeaderContext/HeaderContext';
import CreateReview from 'components/Admin/ReviewsPage/CraeteReview/CreateReview';
import Button from 'components/Shared/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import s from './WhatCanWeSay.module.scss';

const WhatCanWeSay = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const headerHeight = useHeaderHeight();
  const [isPublic, setIsPublic] = useState(null);
  const totalPages = useSelector(getTotalPagesReview);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const reviews = useSelector(getReviews);
  const isError = useSelector(getErrorTechnical);
  const isMessage = useSelector(getMessageTechnical);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPublic(null);

    const page = window.location.pathname;
    if (page === '/' || page === '/home') {
      setIsPublic('true');
    } else {
      setIsPublic('false');
    }

    if (isPublic) {
      dispatch(
        getReviewsData({
          page: currentPage,
          display: !isMobile ? 'other' : 'mobile',
          verified: isPublic === 'true' ? true : false,
        })
      );
    }
  }, [dispatch, isError, isMessage, currentPage, isMobile, isPublic]);

  const goToPreviousPage = () => {
    if (!isMobile && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (isMobile && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextPage = () => {
    if (!isMobile && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (isMobile && currentIndex + 1 < totalPages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClick = index => {
    setActiveReview(index);
  };

  const handleDelete = async id => {
    dispatch(deleteReview(id));
    setCurrentPage(1);
    setCurrentIndex(0);
    setActiveReview(0);
  };

  const handleEdit = data => {
    dispatch(saveEditReview(data));
    //робимо прокрутку до компонента CreateReview
    const element = document.getElementById('edit-review');
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={s.whatCanWeSay}>
      <div className="container">
        <div className={s.whatCanWeSay__content}>
          <div className={s.whatCanWeSay__titleContent}>
            <h2 className={s.whatCanWeSay__title}>Що кажуть про нас</h2>
          </div>
          {reviews.length > 0 && (
            <div className={s.whatCanWeSay__part}>
              <div className={s.whatCanWeSay__btnContent}>
                <div
                  className={`${s.whatCanWeSay__btn} ${
                    !isMobile && currentPage === 1
                      ? s.disabled
                      : isMobile && currentIndex === 0
                      ? s.disabled
                      : ''
                  }`}
                  onClick={goToPreviousPage}
                >
                  <FiChevronLeft
                    size={60}
                    strokeWidth={1}
                    className={s.arrowlinkLeft}
                  />
                </div>
              </div>

              {!isMobile && reviews.length > 0 && (
                <div className={s.whatCanWeSay__feedbackContent}>
                  <ul className={s.whatCanWeSay__photoList}>
                    {reviews.map((review, index) => (
                      <li key={index} className={s.whatCanWeSay__photoItem}>
                        <div
                          className={`${
                            activeReview === index
                              ? s.whatCanWeSay__reviewActive
                              : s.whatCanWeSay__reviewInactive
                          }`}
                          style={{ backgroundImage: `url(${review.photo})` }}
                          alt={`Feedback ${index + 1}`}
                          onClick={() => handleClick(index)}
                        >
                          {!review.verified && (
                            <p className={s.whatCanWeSay__notes}>Новий</p>
                          )}
                        </div>
                        {activeReview === index && !isMobile && (
                          <div className={s.whatCanWeSay__reviewDivider}></div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className={s.whatCanWeSay__reviewPart}>
                    <p className={s.whatCanWeSay__textReview}>
                      {reviews[activeReview].review}
                    </p>
                    <p className={s.whatCanWeSay__textSource}>
                      {`${reviews[activeReview].nameOwnerReview}, ${reviews[activeReview].date}`}
                      <br></br>
                      <span
                        style={{ fontWeight: '200' }}
                      >{`(${reviews[activeReview].dataSource})`}</span>
                    </p>
                    {isPublic === 'false' && (
                      <div className={s.whatCanWeSay__btnWrapper}>
                        <Button
                          text={
                            !reviews[activeReview].verified
                              ? 'Прийняти відгук'
                              : 'Редагувати відгук'
                          }
                          btnClass="btnLight"
                          handleClick={() => handleEdit(reviews[activeReview])}
                        />
                        <Button
                          text={'Видалити відгук'}
                          btnClass="btnLight"
                          handleClick={() =>
                            handleDelete(reviews[activeReview]._id)
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {isMobile && reviews.length > 0 && (
                <div className={s.whatCanWeSay__feedbackContent}>
                  <div
                    className={s.whatCanWeSay__reviewActive}
                    style={{
                      backgroundImage: `url(${reviews[currentIndex].photo})`,
                    }}
                    alt={`Feedback ${currentIndex + 1}`}
                  >
                    {!reviews[currentIndex].verified && (
                      <p className={s.whatCanWeSay__notes}>Новий</p>
                    )}
                  </div>
                  <p className={s.whatCanWeSay__textReview}>
                    {reviews[currentIndex].review}
                  </p>
                  <div className={s.whatCanWeSay__textSourcePart}>
                    <p className={s.whatCanWeSay__textSource}>
                      {`${reviews[currentIndex].nameOwnerReview}, ${reviews[currentIndex].date}`}
                      <br></br>
                      <span
                        style={{ fontWeight: '200' }}
                      >{`(${reviews[currentIndex].dataSource})`}</span>
                    </p>
                  </div>
                  {isPublic === 'false' && (
                    <div className={s.whatCanWeSay__btnWrapper}>
                      <Button
                        text={
                          !reviews[currentIndex].verified
                            ? 'Прийняти відгук'
                            : 'Редагувати відгук'
                        }
                        btnClass="btnLight"
                        handleClick={() => handleEdit(reviews[currentIndex])}
                      />
                      <Button
                        text={'Видалити відгук'}
                        btnClass="btnLight"
                        handleClick={() =>
                          handleDelete(reviews[currentIndex]._id)
                        }
                      />
                    </div>
                  )}
                </div>
              )}

              <div className={s.whatCanWeSay__btnContent}>
                <div
                  className={`${s.whatCanWeSay__btn} ${
                    totalPages === currentPage
                      ? s.disabled
                      : totalPages === currentIndex + 1
                      ? s.disabled
                      : ''
                  }`}
                  onClick={goToNextPage}
                >
                  <FiChevronRight
                    size={60}
                    strokeWidth={1}
                    className={s.arrowlinkRigth}
                  />
                </div>
              </div>
            </div>
          )}
          {reviews.length === 0 && (
            <p className={s.whatCanWeSay__emtyText}>
              Наразі жодних відгуків не отримано.
            </p>
          )}
          {isPublic === 'true' && (
            <>
              <div className={s.whatCanWeSay__divider}></div>
              <CreateReview />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatCanWeSay;
