import React, { useEffect, useState } from "react";
import { getReviews } from "./Utils/api";
import { Link, useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // const params = useParams();

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <ul className="reviews-gallery">
      {reviews.map((review) => {
        return (
          <li key={review.review_id} className="review-listing-card">
            <Link to={`reviews/${review.review_id}`}>
              <h3>{review.title}</h3>
            </Link>
            <h4>By {review.owner}</h4>
            <img
              alt={review.title}
              src={review.review_img_url}
              className="reviews-card-image"
            />
            <span>
              <h5>Votes {review.votes}</h5>
            </span>
            <p>Comments</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
