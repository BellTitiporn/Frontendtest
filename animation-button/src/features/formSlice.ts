import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: null
  },
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
      localStorage.setItem('formData', JSON.stringify(action.payload));
    }
  }
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;