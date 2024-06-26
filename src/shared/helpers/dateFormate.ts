export const dateFormat = (date: Date) => {
  return `${date.toLocaleDateString()} в ${date.toLocaleTimeString()}`;
};
