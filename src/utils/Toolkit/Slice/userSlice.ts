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
  },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
