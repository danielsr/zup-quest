import moment from "moment";

export const formatDate = strDate => {
  if (!strDate) return "";
  var date = new Date(strDate);
  return moment(date).format("DD/MM/YYYY HH:mm");
};
