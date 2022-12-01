import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface iMainDynamicState {
  dummyDynamicVariable: boolean;
}

const initialState: iMainDynamicState = {
  dummyDynamicVariable: false,
};

export const MainDynamicSlice = createSlice({
  name: 'MainDynamic',
  initialState,
  reducers: {
    setDummyDynamicVariable: (state, action: PayloadAction<boolean>) => {
      state.dummyDynamicVariable = action.payload;
    },
  },
});

export const { setDummyDynamicVariable } = MainDynamicSlice.actions;
