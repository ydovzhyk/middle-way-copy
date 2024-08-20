import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderProvider } from './components/helpers/HeaderContext/HeaderContext';
import UserRoutes from './components/Routes/UserRoutes.jsx';
import appRoutes from './components/Routes/routes.json';
import {
  setHeaderHeight,
  setCallButton,
} from './redux/technical/technical-slice';
import { updateIsLoginPanel } from './redux/auth/auth-slice.js';
import { getCurrentUser } from './redux/auth/auth-operations';
import { getLoadingAuth } from './redux/auth/auth-selectors';
import {
  getLoadingTechnical,
  getModalWindowStatus,
} from './redux/technical/technical-selectors.js';
import ScrollToTopOnRouteChange from './components/helpers/ScrollToTopOnRouteChange';
import ScrollToTopButton from './components/Shared/ScrollToTopButton';
import CircleButton from 'components/Shared/CircleButton/CircleButton.jsx';
import {
  getHeaderHeight,
  getCallButton,
} from './redux/technical/technical-selectors.js';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Shared/Loader';
import ModalWindow from 'components/Shared/ModalWindow/index.js';
import SchemaOrg from 'components/helpers/SchemaOrg';

const checkLocationPathname = (location, dispatch) => {
  const found = appRoutes.some(route => location === route);
  dispatch(setHeaderHeight(!found));
  dispatch(setCallButton(found));
};

function App() {
  const isShowModal = useSelector(getModalWindowStatus);
  const isHeaderHeight = useSelector(getHeaderHeight);
  const isCallButton = useSelector(getCallButton);
  const loadingAuth = useSelector(getLoadingAuth);
  const loadingTechnical = useSelector(getLoadingTechnical);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    checkLocationPathname(pathname, dispatch);
  }, [location, dispatch]);

  //we read the parameters from the url for auth
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const action = params.get('action');
    const password = params.get('password');

    const processData = async () => {
      dispatch(updateIsLoginPanel(true));
      navigate(`/auth/login`);
    };
    const handleAction = async () => {
      if (action === 'authorize' && password === '0503562938') {
        await processData();
      } else {
        return;
      }
    };
    handleAction();
  }, [location.search, dispatch, navigate]);

  //we return the user from the local storage when the page is reloaded
  useEffect(() => {
    const authData = localStorage.getItem('middleway.authData');
    if (authData) {
      dispatch(updateIsLoginPanel(true));
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (loadingAuth || loadingTechnical) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [loadingAuth, loadingTechnical]);

  return (
    <HeaderProvider value={!isHeaderHeight ? true : false}>
      <SchemaOrg />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {!isHeaderHeight && <Header />}
        <main>
          <ScrollToTopOnRouteChange />
          <ScrollToTopButton />
          {isCallButton && <CircleButton />}
          {isLoaded && <Loader />}
          <UserRoutes />
        </main>
        {!isHeaderHeight && <Footer />}
        {isShowModal && <ModalWindow />}
      </div>
    </HeaderProvider>
  );
}

export default App;
