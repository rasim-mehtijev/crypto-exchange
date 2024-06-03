import moment from "moment";

export const parseTime = (time, format) => moment(time).format(format);

export const buildPeriod = ({ number, unit }) => ({
  start: +moment().subtract(number, unit),
  end: +moment(),
});
