import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface iMainData {
  dummyVariable: boolean;
  themeMode: 'light' | 'dark';
}

const initialState: iMainData = {
  dummyVariable: false,
  themeMode: 'light',
};

export const MainDataSlice = createSlice({
  name: 'MainData',
  initialState,
  reducers: {
    setDummyVariable: (state, action: PayloadAction<boolean>) => {
      state.dummyVariable = action.payload;
    },
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setDummyVariable, setThemeMode } = MainDataSlice.actions;
