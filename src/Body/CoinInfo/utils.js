import moment from "moment";

export const parseTime = (time) => moment(time).format("HH:mm");

export const buildPeriod = ({ number, unit }) => ({
  start: +moment().subtract(number, unit),
  end: +moment(),
});
