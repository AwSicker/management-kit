import React from "react";
import { Link } from "react-scroll";

import { taskItemsType } from "components/Tasks/taskItems";
import { CheckBox } from "components/CheckBox";
import { Tag } from "components/Tag";

import "./taskList.scss";
import { tagType } from "../../utils";

interface tasksListItemsType {
  items: taskItemsType[];
  onTaskSelect: (taskId: number) => void;
  onDoneChecked: (taskId: number, checked: boolean) => void;
}

export const TasksList = ({
  items,
  onTaskSelect,
  onDoneChecked,
}: tasksListItemsType) => {
  return (
    <>
      {items.map((item) => {
        const taskId = item.id.toString();
        return (
          <div className="taskList" key={item.id}>
            <div className="taskList__container">
              <CheckBox
                id={taskId}
                isChecked={item.done}
                onChange={() => onDoneChecked(item.id, item.done)}
              />
              <Link
                to="taskDescriptionTitle"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div onClick={() => onTaskSelect(item.id)}>
                  <span className="taskList__text">{item.title}</span>
                  <div className="taskList__tag">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="taskList__tag_img"
                    />
                    <Tag type={tagType(item.tag)} title={item.tag} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
