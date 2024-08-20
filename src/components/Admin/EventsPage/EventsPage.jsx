import CreateEvent from './CreateEvent';
import ScheduleOfEventsAdmin from './ScheduleOfEventsAdmin';

import s from './EventsPage.module.scss';

const EventsPage = () => {
  return (
    <section className={s.eventsPage}>
      <div className="container">
        <CreateEvent />
        <ScheduleOfEventsAdmin />
      </div>
    </section>
  );
};

export default EventsPage;
