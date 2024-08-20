import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  axiosSendAppointmentData,
  axiosGetAppointmentsData,
  axiosDeleteAppointment,
  axiosEditAppointment,
  axiosSendEventData,
  axiosGetEventsData,
  axiosDeleteEvent,
  axiosEditEventData,
  axiosSendReviewData,
  axiosEditReviewData,
  axiosGetReviewsData,
  axiosDeleteReview,
  axiosGetListQAData,
  axiosEditQAData,
  axiosSendQAData,
  axiosDeleteQA,
} from '../../api/technicalData';

export const sendAppointmentData = createAsyncThunk(
  'technical/appointment',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSendAppointmentData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getAppointmentsData = createAsyncThunk(
  'technical/appointments',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetAppointmentsData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  'technical/appointment/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosDeleteAppointment(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const editAppointment = createAsyncThunk(
  'technical/appointment/edit',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosEditAppointment(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const sendEventData = createAsyncThunk(
  'technical/event',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSendEventData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getEventsData = createAsyncThunk(
  'technical/events',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetEventsData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'technical/event/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosDeleteEvent(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const editEventData = createAsyncThunk(
  'technical/event/edit',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosEditEventData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const sendReviewData = createAsyncThunk(
  'technical/review',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSendReviewData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteReview = createAsyncThunk(
  'technical/review/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosDeleteReview(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const editReviewData = createAsyncThunk(
  'technical/review/edit',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosEditReviewData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getReviewsData = createAsyncThunk(
  'technical/reviews',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetReviewsData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const sendQAData = createAsyncThunk(
  'technical/qa',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSendQAData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const editQAData = createAsyncThunk(
  'technical/qa/edit',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosEditQAData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getListQAData = createAsyncThunk(
  'technical/listQA',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetListQAData();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteQA = createAsyncThunk(
  'technical/qa/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosDeleteQA(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
