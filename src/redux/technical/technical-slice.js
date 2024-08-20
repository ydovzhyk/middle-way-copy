import { createSlice } from '@reduxjs/toolkit';
import {
  sendAppointmentData,
  getAppointmentsData,
  deleteAppointment,
  editAppointment,
  sendEventData,
  getEventsData,
  deleteEvent,
  editEventData,
  sendReviewData,
  editReviewData,
  getReviewsData,
  deleteReview,
  sendQAData,
  editQAData,
  deleteQA,
  getListQAData,
} from './technical-operations';

const initialState = {
  modalWindowStatus: false,
  error: null,
  message: null,
  headerHeight: false,
  callButton: true,
  loading: false,
  events: [],
  eventsDates: [],
  editEvent: null,
  reviews: [],
  editReview: null,
  totalPagesReview: 1,
  appointments: [],
  totalPages: 1,
  listQA: [],
  editQA: null,
};

const technical = createSlice({
  name: 'technical',
  initialState,
  reducers: {
    setModalWindowStatus: (store, action) => {
      store.modalWindowStatus = action.payload;
    },
    clearTechnicalError: store => {
      store.error = null;
    },
    clearTechnicalMessage: store => {
      store.message = null;
    },
    setHeaderHeight: (store, action) => {
      store.headerHeight = action.payload;
    },
    setCallButton: (store, action) => {
      store.callButton = action.payload;
    },
    saveEditEvent: (store, action) => {
      store.editEvent = action.payload;
    },
    saveEditReview: (store, action) => {
      store.editReview = action.payload;
    },
    clearEditReview: (store, action) => {
      store.editReview = null;
    },
    saveEditQA: (store, action) => {
      store.editQA = action.payload;
    },
    clearEditQA: (store, action) => {
      store.editQA = null;
    },
  },
  extraReducers: builder => {
    builder
      // * SEND APPOINTMENT DATA
      .addCase(sendAppointmentData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(sendAppointmentData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(sendAppointmentData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * GET APPOINTMENTS DATA
      .addCase(getAppointmentsData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(getAppointmentsData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.appointments = payload.appointments;
        store.totalPages = payload.totalPages;
      })
      .addCase(getAppointmentsData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * DELETE APPOINTMENT
      .addCase(deleteAppointment.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(deleteAppointment.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(deleteAppointment.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * EDIT APPOINTMENT
      .addCase(editAppointment.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(editAppointment.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(editAppointment.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * SEND EVENT DATA
      .addCase(sendEventData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(sendEventData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(sendEventData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * EDIT EVENT DATA
      .addCase(editEventData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(editEventData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
        store.editEvent = null;
      })
      .addCase(editEventData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * GET EVENTS DATA
      .addCase(getEventsData.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getEventsData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.eventsDates = payload.eventsDates;
        store.events = payload.events;
      })
      .addCase(getEventsData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * DELETE EVENT
      .addCase(deleteEvent.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(deleteEvent.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(deleteEvent.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * SEND REVIEW DATA
      .addCase(sendReviewData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(sendReviewData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(sendReviewData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * EDIT REVIEW DATA
      .addCase(editReviewData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(editReviewData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
        store.editReview = null;
      })
      .addCase(editReviewData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * GET REVIEWS DATA
      .addCase(getReviewsData.pending, store => {
        store.loading = true;
        // store.error = null;
        // store.message = null;
      })
      .addCase(getReviewsData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.reviews = payload.reviews;
        store.totalPagesReview = payload.totalPagesReview;
      })
      .addCase(getReviewsData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * DELETE REVIEW
      .addCase(deleteReview.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(deleteReview.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(deleteReview.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * SEND QA DATA
      .addCase(sendQAData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(sendQAData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(sendQAData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * EDIT QA DATA
      .addCase(editQAData.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(editQAData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
        store.editQA = null;
      })
      .addCase(editQAData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * GET ListQA DATA
      .addCase(getListQAData.pending, store => {
        store.loading = true;
      })
      .addCase(getListQAData.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.listQA = payload.listQA;
      })
      .addCase(getListQAData.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      })
      // * DELETE QA
      .addCase(deleteQA.pending, store => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(deleteQA.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
        store.modalWindowStatus = true;
      })
      .addCase(deleteQA.rejected, (store, { payload }) => {
        store.loading = false;
        if (payload && payload.data && payload.data.message) {
          store.error = payload.data.message;
        } else if (payload && payload.message) {
          store.error = payload.message;
        } else {
          store.error = 'Oops, something went wrong, try again';
        }
        store.modalWindowStatus = true;
      });
  },
});

export default technical.reducer;
export const {
  setModalWindowStatus,
  clearTechnicalError,
  clearTechnicalMessage,
  setHeaderHeight,
  setCallButton,
  saveEditEvent,
  saveEditReview,
  clearEditReview,
  saveEditQA,
  clearEditQA,
} = technical.actions;
