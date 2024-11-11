import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Culture {
  id: number;
  title: string;
  short_description: string;
  questions: string[];
  answers: string[];
}

interface CultureState {
  cultures: Culture[];
}

const initialState: CultureState = {
  cultures: [],
};

const cultureSlice = createSlice({
  name: 'culture',
  initialState,
  reducers: {
    setCultures: (state, action: PayloadAction<Culture[]>) => {
      state.cultures = action.payload;
    },
    addCulture: (state, action: PayloadAction<Culture>) => {
      state.cultures.push(action.payload);
    },
    updateCulture: (state, action: PayloadAction<Culture>) => {
      const index = state.cultures.findIndex(culture => culture.id === action.payload.id);
      if (index !== -1) {
        state.cultures[index] = action.payload;
      }
    },
    deleteCulture: (state, action: PayloadAction<number>) => { // Corrected to number type
      state.cultures = state.cultures.filter(culture => culture.id !== action.payload);
    },
  },
});

export const { setCultures, addCulture, updateCulture, deleteCulture } = cultureSlice.actions;
export default cultureSlice.reducer;
