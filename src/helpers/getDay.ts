export const getDay = () => {
  return new Date(Date.now()).getDay() - 1 <= 0
    ? 6
    : new Date(Date.now()).getDay() - 1;
};
