import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

interface AuthState {
  user: string | undefined;
}
const initialState: AuthState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
