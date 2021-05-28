import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsForReview } from "./Utils/api";
import { formatDate } from "./Utils/data-manipulation";

const Comments = ({ comments, setComments }) => {
  const params = useParams();
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [isErrorComments, setIsErrorComments] = useState(false);
  useEffect(() => {
    getCommentsForReview(params.review_id)
      .then((commentsFromApi) => {
        setIsLoadingComments(false);
        setComments(commentsFromApi);
      })
      .catch((err) => {
        setIsErrorComments(true);
      });
  }, [params.review_id]);

  if (isErrorComments) return <p>Sorry, An Error Has Occured</p>;
  if (isLoadingComments) return <p>Loading Page!</p>;

  return (
    <div>
      <ul className="comment-gallery">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <h2 className="comment-author">{comment.author}</h2>
              <p>{formatDate(comment.created_at)}</p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
