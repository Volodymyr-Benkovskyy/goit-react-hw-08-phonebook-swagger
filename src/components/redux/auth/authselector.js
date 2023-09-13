export const selectIsAuth = state => state.auth.token;

export const selectisIsAuth = state => state.auth.isAuth;
export const selectName = state => state.auth.name;
export const selectEmail = state => state.auth.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;
