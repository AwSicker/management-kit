import React, { useContext, useEffect, useState } from "react";

import { Followers } from "components/Followers";
import { CheckBox } from "components/CheckBox";
import { Button, BUTTON_STYLE } from "components/Button";
import { simpleIcon } from "const";
import { Tag } from "components/Tag";
import { Files } from "components/Files";
import { NewComment } from "components/NewComment";
import { Comment } from "components/Comment";
import { StorageContext } from "context/storage";
import {
  addComment,
  deleteFile,
  deleteTask,
  taskIsChecked,
} from "context/actions";
import { commentType, taskItemsType } from "components/Tasks/taskItems";

import "./taskDescription.scss";
import { auth } from "../../firebase";
import moment from "moment";

export const TaskDescription = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  const { state, dispatch } = useContext(StorageContext);

  const doneTaskHandler = (task: taskItemsType): void => {
    dispatch(taskIsChecked(task.id));
  };
  const taskForView = state.tasks.find((task) => task.isOpened);

  return (
    <>
      {taskForView && (
        <div className="task-description">
          <div className="task-description__container">
            <div className="task-description__header">
              <div>
                <h2 className="task-description__header_title">
                  {taskForView?.title}
                </h2>
                <span>
                  Added by {currentUser?.displayName} at
                  {moment().format(" MMMM Do HH:MM")}
                </span>
              </div>
              <div className="task-description__header_misc">
                <CheckBox
                  id="description"
                  isChecked={taskForView?.done}
                  onChange={() => {
                    taskForView && doneTaskHandler(taskForView);
                  }}
                />
                {currentUser && (
                  <div className="task-description__showMore">
                    <Button
                      category={BUTTON_STYLE.simple}
                      titleIcon={simpleIcon}
                    />
                    <div className="task-description__showMore_hidden">
                      <Button
                        category={BUTTON_STYLE.critical}
                        title="Delete Task"
                        onClick={() => dispatch(deleteTask(taskForView?.id))}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="task-description__info">
              <div className="task-description__data">
                <span className="task-description__data_title">Assign to</span>
                <div className="task-description__assign">
                  <img
                    src={taskForView?.image}
                    alt="img"
                    className="task-description__assign_img"
                  />
                  <span>{taskForView?.assign}</span>
                </div>
              </div>
              <div className="task-description__data">
                <span className="task-description__data_title">Due on</span>
                <span>{taskForView?.date}</span>
              </div>
              <div className="task-description__data">
                <span className="task-description__data_title">Tag</span>
                <Tag type={taskForView?.tagType} title={taskForView?.tag} />
              </div>
              <div className="task-description__data">
                <span className="task-description__data_title">Followers</span>
                <Followers />
              </div>
            </div>
            <hr className="task-description__divider" />
            <div className="task-description__description">
              <h4 className="task-description__description_title">
                Description
              </h4>
              <p className="task-description__description_text">
                {taskForView?.description}
              </p>
            </div>
            <div className="task-description__file">
              {taskForView.files && (
                <Files
                  files={taskForView.files}
                  onDelete={(fileId, taskId) =>
                    dispatch(deleteFile(fileId, taskId))
                  }
                  taskId={taskForView.id}
                />
              )}
            </div>
            <hr className="task-description__divider" />
            <div className="task-description__discussion">
              <div className="task-description__discussion_title">
                <h4 className="task-description__discussion_title-text">
                  Discussion
                </h4>
                <span className="task-description__discussion_count">
                  comments: {taskForView?.comments?.length}
                </span>
              </div>
              {taskForView?.comments && currentUser && (
                <NewComment
                  addComment={(comment: commentType, taskId: number) =>
                    dispatch(addComment(comment, taskId))
                  }
                  taskId={taskForView.id}
                  comments={taskForView.comments}
                  username={currentUser.displayName}
                />
              )}
              {!currentUser && (
                <p className="task-description__discussion_noUser">
                  Sign in to leave comments
                </p>
              )}
              {taskForView?.comments && (
                <Comment comments={taskForView?.comments} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
