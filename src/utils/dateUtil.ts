// format(hh:mm:ss)
const TODAY = new Date();
export const parseDate = ({ date, divider = '/' }: { date: string; divider?: string }) => {
  const [year, month, day] = date.split(':');
  if (year === TODAY.getFullYear().toString()) {
    return `${month}${divider}${day}`;
  } else {
    return `${year}${divider}${month}${divider}${day}`;
  }
};
