import React from "react";
import "./newComment.scss";
import { useForm } from "react-hook-form";
import { commentType } from "../Tasks/taskItems";
import { getNewId } from "../utils";

interface newCommentProps {
  addComment: (comment: commentType, taskId: number) => void;
  taskId: number;
  comments: commentType[];
}

export const NewComment = ({
  addComment,
  taskId,
  comments,
}: newCommentProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    addComment(
      {
        id: getNewId(comments),
        author: "random",
        createDate: Date(),
        text: data.text,
        vacancy: "Developer",
        photo: "https://via.placeholder.com/48",
      },
      taskId
    );
  };

  return (
    <div className="new-comment">
      <img
        src="https://via.placeholder.com/48"
        alt="profile-avatar"
        className="new-comment__avatar"
      />
      <form className="new-comment__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="new-comment__input"
          placeholder="Add a comment…"
          ref={register}
          required={true}
          name="text"
        />
      </form>
    </div>
  );
};
