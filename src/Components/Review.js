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
  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [isErrorReview, setIsErrorReview] = useState(false);

  useEffect(() => {
    getSingleReview(params.review_id)
      .then((reviewFromApi) => {
        setIsLoadingReview(false);
        setReview(reviewFromApi);
        setReviewVotes(reviewFromApi.votes);
      })
      .catch((err) => {
        setIsErrorReview(true);
      });
  }, [params.review_id]);

  if (isErrorReview) return <p>Sorry, A Error Has Occured</p>;
  if (isLoadingReview) return <p>Loading Page!</p>;

  return (
    <div className="review-div">
      <h2 className="review-title">{review.title}</h2>
      <p className="review-author">By {review.owner}</p>
      <img
        src={review.review_img_url}
        alt={review.title}
        className="review-image"
      />
      <p className="review-designer">Designed by {review.designer}</p>
      <p className="review-body">{review.review_body}</p>

      <span>
        <h5 className="review-votes">Votes {reviewVotes}</h5>
        <button
          className="review-vote-button"
          onClick={() => {
            voteReview(review.review_id);
            setReviewVotes((currVotes) => {
              return currVotes + 1;
            });
          }}
        >
          <img
            className="upvote-button"
            alt="upvote"
            src="https://media0.giphy.com/media/jQOs1usF8FkpgTe7AA/source.gif"
          />
        </button>
      </span>
      <p className="comment-bar">Comments</p>
      <Comments comments={comments} setComments={setComments} />
      <CommentForm setComments={setComments} />
    </div>
  );
};

export default Review;
