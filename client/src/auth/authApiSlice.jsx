import { apiSlice } from "../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.query({
            query: credentials => 'v1/auth/login',
        }),
        callback: builder.query({
            query: credentials => 'v1/auth/google/callback',
        }),
        sendLogout: builder.mutation({
            query: () => 'v1/auth/logout',
            onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = queryFulfilled;
                    dispatch(logOut());
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState());
                    }, 1000);
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        refresh: builder.mutation({
            query: () => '/auth/refresh',
            onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = queryFulfilled;
                    const { accessToken } = data;
                    dispatch(setCredentials({ accessToken }));
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const {
    useSignInQuery,
    useCallbackQuery,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice;
