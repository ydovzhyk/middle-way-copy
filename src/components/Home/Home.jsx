import Slider from './Slider/Slider';
import WhatCanWeSay from './WhatCanWeSay';
import MainSloganPart from './MainSloganPart';
import QandA from './QA';
import EventPart from './EventPart';

import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.home}>
      <h1 className={s.visuallyHidden}>
        Middle Way - приватна школа та садок, з локаціями у с. Путрівка
        Фастівського району та у м. Васильків
      </h1>
      <Slider />
      <MainSloganPart />
      <EventPart />
      <QandA />
      <WhatCanWeSay />
    </div>
  );
};

export default Home;
