import moment from 'moment';
// moment.locale('id');

export const fromNow = (date) => {
  return moment(date).fromNow();
}

export const year = (date) => {
  return moment(date).format('dddd, D MMM YYYY');
}