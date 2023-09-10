import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from "./authThunk"

let userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    loading: false,
    userInfo: userInfoFromStorage,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
            state.userInfo = null;
        },
        setUserInfo: (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.userInfo = payload;
        },
        setError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.userInfo = null;
        },
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.userInfo = null;
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            authSlice.caseReducers.setLoading(state);
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            authSlice.caseReducers.setUserInfo(state, { payload })
        },
        [loginUser.rejected]: (state, { payload }) => {
            authSlice.caseReducers.setError(state, { payload })
        },
        [registerUser.pending]: (state) => {
            authSlice.caseReducers.setLoading(state);
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            authSlice.caseReducers.setUserInfo(state, { payload })
        },
        [registerUser.rejected]: (state, { payload }) => {
            authSlice.caseReducers.setError(state, { payload })
        },
    },
})

const { reset } = authSlice.actions;

export const logoutUser = () => async (dispatch) => {
    dispatch(reset());
    localStorage.clear();
};

export const authSelector = (state) => state.auth;

export default authSlice.reducer;