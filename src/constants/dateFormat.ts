import moment from "moment";

export const dateFormat = (date: string, showHour: boolean = true) => {
  if (showHour) {
    return moment(date).format("DD MMMM YYYY HH:mm");
  }else{
    return moment(date).format("DD MMMM YYYY");
  }
};
