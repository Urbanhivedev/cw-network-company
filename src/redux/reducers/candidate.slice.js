import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  candidates: [],
  candidate: null,
  error: '',
  message: '',
};

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    fetchCandidates: (state, action) => {
        state.candidates = action.payload;
        state.error = '';
        state.message = '';
      },
    fetchSingleCandidate: (state, action) => {
        state.candidate = action.payload;
      },

    initiatePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    clearCandidateSlice: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = candidateSlice;

export const {
 fetchCandidates,
 fetchSingleCandidate,
 clearCandidateSlice,
} = actions;

export default reducer;


