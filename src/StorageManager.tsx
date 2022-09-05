export const save = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const read = (key: string): string => {
  //@ts-ignore
  return JSON.parse(localStorage.getItem(key)) || {};
};
export const remove = (key: string) => {
  return localStorage.removeItem(key);
};
