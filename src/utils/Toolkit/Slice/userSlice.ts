import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

interface AuthState {
  user: string;
  email?: string;
}
const initialState: AuthState = {
  user: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },
    loginEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});
export const { loginUser, loginEmail } = userSlice.actions;
export default userSlice.reducer;
