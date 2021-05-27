import React, { useEffect, useState } from "react";
import { getReviews } from "./Utils/api";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "./Utils/data-manipulation";
import FilterBar from "./FilterBar";

const Reviews = () => {
  const [sortedBy, setSortedBy] = useState("title");
  const [orderBy, setOrderBy] = useState("asc");
  const [reviews, setReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [isErrorReviews, setIsErrorReviews] = useState(false);
  const params = useParams();

  useEffect(() => {
    getReviews(params.category, { orderBy, sortedBy })
      .then((reviewsFromApi) => {
        setIsLoadingReviews(false);
        setReviews(reviewsFromApi);
      })
      .catch((err) => {
        setIsErrorReviews(true);
      });
  }, [params.category, orderBy, sortedBy]);

  if (isErrorReviews) return <p>Sorry, An Error Has Occured</p>;
  if (isLoadingReviews) return <p>Loading Page!</p>;

  return (
    <div>
      <FilterBar setOrderBy={setOrderBy} setSortedBy={setSortedBy} />
      <ul className="reviews-gallery">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-listing-card">
              <Link to={`/reviews/${review.review_id}`}>
                <h3>{review.title}</h3>
              </Link>
              <h4>By {review.owner}</h4>
              <p>on {formatDate(review.created_at)}</p>
              <img
                alt={review.title}
                src={review.review_img_url}
                className="reviews-card-image"
              />
              <span>
                <h5>Votes {review.votes}</h5>
              </span>
              <p>Comments {review.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
