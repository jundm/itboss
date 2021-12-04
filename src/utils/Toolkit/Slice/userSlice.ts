import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

interface AuthState {
  user?: string;
  email?: string;
}
const initialState: AuthState = {
  user: undefined,
  email: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { userInfo } = userSlice.actions;
export default userSlice.reducer;
