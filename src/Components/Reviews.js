import React, { useEffect, useState } from "react";
import { getReviews } from "./Utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div className="Reviews Gallery">
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-listing-card">
              <h3>{review.title}</h3>
              <h4>By {review.owner}</h4>
              <img
                alt={review.title}
                src={review.review_img_url}
                className="reviews-card-image"
              />
              <span>
                <h5>Votes {review.votes}</h5>
                <button>⬆️</button>
              </span>
              <p>Comments</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
