export const descriptionValidation = (description: string): boolean => {
  if (description.trim().length < 80 || description.trim().length > 9000) {
    return false;
  }
  return true;
};

export const wordCounter = (words: number): string => {
  if (words < 80) {
    return `Wymaga jeszcze przynajmniej ${80 - words} znaków`;
  }
  if (words > 9000) {
    return `Usun ${9000 - words} znakow by kontynouwac`;
  }
  return "";
};
