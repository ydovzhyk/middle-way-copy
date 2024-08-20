import ScheduleOfEventsAdmin from '../../Admin/EventsPage/ScheduleOfEventsAdmin/ScheduleOfEventsAdmin';

import s from './EventPart.module.scss';

const EventPart = () => {
  return (
    <section className={s.eventPart}>
      <div className="container">
        <div className={s.eventPart__content}>
          <div className={s.eventPart__titleContent}>
            <h2 className={s.eventPart__title}>Наш графік подій</h2>
          </div>
          <div className={s.eventPart__mainPart}>
            <ScheduleOfEventsAdmin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPart;
