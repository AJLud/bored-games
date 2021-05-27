export const formatDate = (isoDate) => {
  const [date, time] = isoDate.split("T");

  const splitDate = date.split("-");
  const timeFormatted = time.slice(0, 5);

  return `${splitDate[0]}/${splitDate[1]}/${splitDate[2]} @ ${timeFormatted}`;
};

export const formatCategories = (category_slug) => {
  let replacerCategory = "";
  const noDashes = category_slug.replace(/-/g, " ");
  console.log(noDashes);
  const splitWords = noDashes.split(" ");
  splitWords.forEach((word) => {
    replacerCategory += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });
  return replacerCategory.substring(0, replacerCategory.length - 1);
};
