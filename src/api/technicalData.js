import { instance } from './auth';

export const axiosGetTechnicalData = async () => {
  const { data } = await instance.post('/technical/data');
  return data;
};

export const axiosSendAppointmentData = async userData => {
  const { data } = await instance.post('/technical/appointment', userData);
  return data;
};

export const axiosDeleteAppointment = async userData => {
  const { data } = await instance.delete(
    `/technical/appointment/delete/${userData}`
  );
  return data;
};

export const axiosGetAppointmentsData = async userData => {
  const { data } = await instance.get('/technical/appointments', {
    params: {
      page: userData,
    },
  });
  return data;
};

export const axiosEditAppointment = async userData => {
  const { data } = await instance.post('/technical/appointment/edit', userData);
  return data;
};

export const axiosSendEventData = async userData => {
  const { data } = await instance.post('/technical/event', userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const axiosGetEventsData = async userData => {
  const { data } = await instance.get(`/technical/events/${userData}`);
  return data;
};

export const axiosDeleteEvent = async userData => {
  const { data } = await instance.delete(`/technical/event/delete/${userData}`);
  return data;
};

export const axiosEditEventData = async userData => {
  const { data } = await instance.post('/technical/event/edit', userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const axiosSendReviewData = async userData => {
  const { data } = await instance.post('/technical/review', userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const axiosEditReviewData = async userData => {
  const { data } = await instance.post('/technical/review/edit', userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const axiosGetReviewsData = async userData => {
  const { data } = await instance.get('/technical/reviews', {
    params: {
      page: userData.page,
      display: userData.display,
      verified: userData.verified,
    },
  });
  return data;
};

export const axiosDeleteReview = async userData => {
  const { data } = await instance.delete(
    `/technical/review/delete/${userData}`
  );
  return data;
};

export const axiosSendQAData = async userData => {
  const { data } = await instance.post('/technical/qa', userData);
  return data;
};

export const axiosEditQAData = async userData => {
  const { data } = await instance.post('/technical/qa/edit', userData);
  return data;
};

export const axiosGetListQAData = async () => {
  const { data } = await instance.get('/technical/listQA');
  return data;
};

export const axiosDeleteQA = async userData => {
  const { data } = await instance.delete(`/technical/qa/delete/${userData}`);
  return data;
};
