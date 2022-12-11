import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  job: null,
  jobsApplied: null,
  jobsHired: null,
  error: '',
  message: '',
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetchJobs: (state, action) => {
        state.jobs = action.payload;
        state.error = '';
        state.message = '';
      },
    fetchSingleJob: (state, action) => {
        state.job = action.payload;
      },
    fetchJobsApplied: (state, action) => {
        state.jobsApplied = action.payload;
      },
    fetchJobsHired: (state, action) => {
        state.jobsHired = action.payload;
      },

    initiatePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    clearJobSlice: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = jobSlice;

export const {
 fetchJobs,
 fetchSingleJob,
 fetchJobsApplied,
 fetchJobsHired,
 clearJobSlice,
} = actions;

export default reducer;


