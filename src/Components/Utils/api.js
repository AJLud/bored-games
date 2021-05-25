import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://wwe-hall-of-game.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories");

  return data.categories;
};

export const getReviews = async (category) => {
  const { data } = await gamesApi.get("/reviews", {
    params: {
      category,
    },
  });

  return data.reviews;
};

export const getSingleReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);

  return data.review;
};

export const getCommentsForReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const voteReview = async (review_id) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: 1,
  });
};
