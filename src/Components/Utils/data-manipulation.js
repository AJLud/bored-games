export const formatDate = (isoDate) => {
  const [date, time] = isoDate.split("T");

  const splitDate = date.split("-");
  const timeFormatted = time.slice(0, 5);

  return `${splitDate[0]}/${splitDate[1]}/${splitDate[2]} @ ${timeFormatted}`;
};
