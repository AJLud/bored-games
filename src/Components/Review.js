import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { getSingleReview, voteReview } from "./Utils/api";

const Review = () => {
  const params = useParams();
  const [review, setReview] = useState({});
  const [reviewVotes, setReviewVotes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleReview(params.review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setReviewVotes(reviewFromApi.votes);
    });
  }, [params.review_id]);

  return (
    <div>
      <h2>{review.title}</h2>
      <p>By {review.owner}</p>
      <img
        src={review.review_img_url}
        alt={review.title}
        className="reviews-card-image"
      />
      <p>Designed by {review.designer}</p>
      <p>{review.review_body}</p>

      <span>
        <h5>Votes {reviewVotes}</h5>
        <button
          onClick={() => {
            voteReview(review.review_id);
            setReviewVotes((currVotes) => {
              return currVotes + 1;
            });
          }}
        >
          ⬆️
        </button>
      </span>
      <p className="comment-bar">Comments</p>
      <Comments comments={comments} setComments={setComments} />
      <CommentForm setComments={setComments} />
    </div>
  );
};

export default Review;
