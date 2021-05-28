import React, { useContext, useState } from "react";
import { postComment } from "./Utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const CommentForm = ({ setComments }) => {
  const [commentInput, setCommentInput] = useState("");
  const params = useParams();
  const { user } = useContext(UserContext);

  const setAndUpdateComments = () => {
    postComment(params.review_id, user, commentInput).then((response) => {
      setComments((currComments) => {
        return [...currComments, response];
      });
    });
  };

  return (
    <div className="comment-form-div">
      <form
        className="comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          setAndUpdateComments();
          setCommentInput("");
        }}
      >
        <label>
          Post Your Comment Here! :
          <input
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
            type="text"
            placeholder="Add Comment....."
            required
            value={commentInput}
          ></input>
        </label>
        <button className="comment-button">It's Comment Time</button>
      </form>
    </div>
  );
};

export default CommentForm;
