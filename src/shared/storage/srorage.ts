export const setDataToStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getDataFromStorage = (key: string) => {
    return localStorage.getItem(key);
}