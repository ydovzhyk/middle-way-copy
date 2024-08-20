import AppointmentsList from './AppointmentsList';

import s from './AppointmentsPage.module.scss';

const AppointmentsPage = () => {
  return (
    <section className={s.appointments}>
      <AppointmentsList />
    </section>
  );
};

export default AppointmentsPage;
