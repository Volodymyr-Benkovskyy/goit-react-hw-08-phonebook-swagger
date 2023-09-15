export const selectIsAuth = state => state.auth.token;

export const selectisIsAuth = state => state.auth.isAuth;
export const selectName = state => state.auth.user;
//export const selectEmail = state => state.auth.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
