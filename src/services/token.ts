const KEY = 'auth-token';

export const getToken = () => localStorage.getItem(KEY) || '';
export const removeToken = () => localStorage.removeItem(KEY);
export const setToken = (token: string) => localStorage.setItem(KEY, token);
