import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsForReview } from "./Utils/api";
import { formatDate } from "./Utils/data-manipulation";

const Comments = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsForReview(params.review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [params.review_id]);

  return (
    <div>
      <ul className="comment-gallery">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <h2>{comment.author}</h2>
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
