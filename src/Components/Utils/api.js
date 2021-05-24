import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://wwe-hall-of-game.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories");

  return data.categories;
};

export const getReviews = async () => {
  const { data } = await gamesApi.get("/reviews");
  console.log(data.reviews);
  return data.reviews;
};
