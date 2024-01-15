export const convertDate = (inputDate: string): string => {
  const dateObject = new Date(inputDate);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  return `${month}/${day}/${year}`;
};
