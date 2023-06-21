export const convertDateToUnixTimeStamp = (date: any) => {
    return Math.floor(date.getTime() / 1000)
};

export const convertUnixTimeStampToDate = (unixTimeStamp: any) => {
    const milliseconds = unixTimeStamp * 1000;
    return new Date(milliseconds).toLocaleDateString;
};

export const createDate = (date: Date, days: number, weeks: number, months: number, years: number): Date => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};
