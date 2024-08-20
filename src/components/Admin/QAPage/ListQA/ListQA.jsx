import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHeaderHeight } from '../../../helpers/HeaderContext/HeaderContext';
import {
  getListQAData,
  deleteQA,
} from '../../../../redux/technical/technical-operations';
import {
  getQA,
  getMessageTechnical,
  getErrorTechnical,
} from '../../../../redux/technical/technical-selectors';
import { saveEditQA } from '../../../../redux/technical/technical-slice';
import Button from 'components/Shared/Button';
import s from './ListQA.module.scss';

function ListItem({ question, answer, answerOwner, isPublic }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li
      className={`${s.list} ${isClicked ? s.open : ''}`}
      onClick={handleClick}
    >
      <div style={{ width: '91%' }}>
        <p>{question}</p>
        {isClicked && (
          <div>
            <p className={`${s.text} ${s.fadeIn}`}>{answer}</p>
            {!isPublic && (
              <div className={s.listqa__authorTextPart}>
                <p className={s.listqa__authorText}>
                  Відповідь надана {answerOwner}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

const ListQA = () => {
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();
  const [isPublic, setIsPublic] = useState(false);
  const listQA = useSelector(getQA);
  const isError = useSelector(getErrorTechnical);
  const isMessage = useSelector(getMessageTechnical);
  const page = window.location.pathname;

  useEffect(() => {
    dispatch(getListQAData());
  }, [dispatch, isError, isMessage]);

  useEffect(() => {
    if (page === '/' || page === '/home') {
      setIsPublic(true);
    } else {
      setIsPublic(false);
    }
  }, [page]);

  const handleEdit = data => {
    dispatch(saveEditQA(data));
    const element = document.getElementById('edit-QA');
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleDelete = data => {
    dispatch(deleteQA(data));
  };

  const filteredQA = isPublic ? listQA.filter(({ answer }) => answer) : listQA;

  return (
    <div
      className={s.listqa}
      style={{ marginBottom: !isPublic ? '20px' : '0px' }}
    >
      {listQA.length > 0 && (
        <ul className={s.listqa__main}>
          {filteredQA.map(({ _id, question, answer, answerOwner }) => (
            <React.Fragment key={_id}>
              <ListItem
                key={`${_id}-1`}
                question={question}
                answer={answer}
                answerOwner={answerOwner}
                isPublic={isPublic}
              />
              {!isPublic && (
                <div key={`${_id}+1`} className={s.listqa__btnWrapper}>
                  <Button
                    text={!answer ? 'Надати відповідь' : 'Редагувати'}
                    btnClass="btnLight"
                    handleClick={() => handleEdit({ _id, question, answer })}
                  />
                  <Button
                    text={'Видалити'}
                    btnClass="btnLight"
                    handleClick={() => handleDelete(_id)}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
      {listQA.length === 0 && (
        <p className={s.textWarning}>
          Ми готуємо список запитань та відповідей, найближчим часом вони будуть
          опубліковані.
        </p>
      )}
    </div>
  );
};

export default ListQA;
