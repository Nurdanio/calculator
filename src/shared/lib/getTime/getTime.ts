export const GetTime = () => {
  const time = new Date();
  return `${time.getHours()}:${time.getMinutes()}`;
};
