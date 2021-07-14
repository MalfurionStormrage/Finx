import { createReducer } from '@reduxjs/toolkit';
import { SET_TOKEN, DELETE_TOKEN } from '../actions/auth';

const auth = createReducer({ token: "" }, (build) => {
    build.addCase(SET_TOKEN.toString(), (state, { payload }) => {
        return { ...state, token: payload }
    })
        .addCase(DELETE_TOKEN.toString(), (state, action) => {
            return { ...state, token: "" };
        });
});

export default auth;