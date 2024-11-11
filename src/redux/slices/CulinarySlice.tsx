import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Culinary {
  id: string;
  title: string;
  description: string;
  sections: { heading: string; content: string }[];
}

interface CulinariesState {
  culinaries: Culinary[];
}

const initialState: CulinariesState = {
  culinaries: [],
};

const culinarySlice = createSlice({
  name: 'culinaries',
  initialState,
  reducers: {
    setCulinaries: (state, action: PayloadAction<Culinary[]>) => {
      state.culinaries = action.payload;
    },
    addCulinary: (state, action: PayloadAction<Culinary>) => {
      state.culinaries.push(action.payload);
    },
    updateCulinary: (state, action: PayloadAction<Culinary>) => {
      const index = state.culinaries.findIndex(culinary => culinary.id === action.payload.id);
      if (index !== -1) {
        state.culinaries[index] = action.payload;
      }
    },
    deleteCulinary: (state, action: PayloadAction<string>) => {
      state.culinaries = state.culinaries.filter(culinary => culinary.id !== action.payload);
    },
  },
});

export const { setCulinaries, addCulinary, updateCulinary, deleteCulinary } = culinarySlice.actions;
export default culinarySlice.reducer;
