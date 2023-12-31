export const selectIsAuth = state => state.auth.token;

export const selectisIsAuth = state => state.auth.isAuth;
export const selectName = state => state.auth.user;
export const selectError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
