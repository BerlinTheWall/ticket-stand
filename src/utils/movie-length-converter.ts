export const convertMinuteToHour = (length: number): string => {
  const hours = Math.floor(length / 60);
  const remainingMinutes = length % 60;

  const formattedTime = `${hours}h ${remainingMinutes}m`;

  return formattedTime;
};
