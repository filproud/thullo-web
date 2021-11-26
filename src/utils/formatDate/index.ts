import { format } from 'date-fns';

export const formatDate = (date: Date | string, formatConstant: string) => {
  if (typeof date === 'string') {
    return format(new Date(date), formatConstant);
  }
  return format(date, formatConstant);
};

// export const API_DAY_FORMAT = 'yyyy-MM-dd';
// export const toApiDayFormat = (date: Date | string) =>
//   formatDate(date, API_DAY_FORMAT);

// export const INTERFACE_DAY_FORMAT = 'd MMM yyyy';
// export const toInterfaceDayFormat = (date: Date | string) =>
//   formatDate(date, INTERFACE_DAY_FORMAT);
