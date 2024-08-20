import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoutes';
import { getLoginPanel, getLogin } from '../../redux/auth/auth-selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const SchoolPage = lazy(() => import('pages/SchoolPage'));
const KindergartenPage = lazy(() => import('pages/KindergartenPage'));
const CampPage = lazy(() => import('pages/CampPage'));
const Kosiv = lazy(() => import('../../components/Kosiv/Kosiv'));
// const Tysa = lazy(() => import('../../components/Tysa/Tysa'));
const SchoolCamp = lazy(() => import('../../components/SchoolCamp/SchoolCamp'));
const PricesPage = lazy(() => import('pages/PricesPage'));
// const AboutUsPage = lazy(() => import('pages/AboutUsPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const Login = lazy(() => import('../../components/Auth/Login/Login'));
const Register = lazy(() => import('../../components/Auth/Register/Register'));
const AdminPage = lazy(() => import('../../pages/AdminPage'));
const EventsPage = lazy(() =>
  import('../../components/Admin/EventsPage/EventsPage')
);
const AppointmentsPage = lazy(() =>
  import('../../components/Admin/AppointmentsPage/AppointmentsPage')
);
const ReviewsPage = lazy(() =>
  import('../../components/Admin/ReviewsPage/ReviewsPage')
);
const QAPage = lazy(() => import('../../components/Admin/QAPage/QAPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const UserRoutes = () => {
  const isLoginPanel = useSelector(getLoginPanel);
  const isLogin = useSelector(getLogin);
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoute />}>
          {isLogin && <Route path="/home" element={<HomePage />} />}
          <Route path="/" element={<SchoolPage />} />
          <Route path="/kindergaten" element={<KindergartenPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/camp/*" element={<CampPage />}>
            <Route index element={<SchoolCamp />} />
            <Route path="kosiv" element={<Kosiv />} />
            {/* <Route path="tysa" element={<Tysa />} /> */}
            <Route path="school" element={<SchoolCamp />} />
          </Route>
          {isLoginPanel && (
            <Route path="/auth/*" element={<AuthPage />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          )}
          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<AdminPage />}>
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="questions_and_answers" element={<QAPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
