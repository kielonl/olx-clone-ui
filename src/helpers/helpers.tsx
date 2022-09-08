export const isObjectEmpty = (object: string) => {
  return object && Object.keys(object).length !== 0;
};
