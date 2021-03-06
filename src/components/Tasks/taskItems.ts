import { TAG_TYPE } from "../Tag/tagProps";
import { ServerFileType } from "components/Files/fileType";

export type commentType = {
  author: string;
  createDate: string;
  text: string;
  vacancy: string;
  id: number;
  photo: string;
};

export enum TASK_TYPE {
  TODO = "toDo",
  BACKLOG = "backLog",
}

export type taskItemsType = {
  done: boolean;
  title: string;
  image: string;
  tag: string;
  id: number;
  addedBy: string;
  date?: string;
  assign?: string;
  description?: string;
  tagType?: TAG_TYPE;
  comments?: commentType[];
  type?: TASK_TYPE;
  files?: ServerFileType[];
};

// export const backLog: taskItemsType[] = [
//   {
//     id: 101,
//     done: true,
//     title: "E-mail after registration so that I can confirm my address",
//     image: photo_1,
//     tag: "Development",
//     date: "Mon, Dec 24",
//     tagType: TAG_TYPE.primary,
//     type: TASK_TYPE.BACKLOG,
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//     comments: [],
//   },
//   {
//     id: 102,
//     done: false,
//     title: "Find top 5 customers and get reviews from them",
//     image: photo_2,
//     tag: "Marketing",
//     tagType: TAG_TYPE.secondary,
//     date: "Tue, Dec 25",
//     assign: "Linzell Bowman",
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//     type: TASK_TYPE.BACKLOG,
//     comments: [
//       {
//         id: 201,
//         author: "Helena Brauer",
//         createDate: "Yesterday at 12:37",
//         text:
//           "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
//         vacancy: "Designer",
//         photo: commentPhoto_1,
//       },
//       {
//         id: 202,
//         author: "Prescott MacCaffery",
//         createDate: "Yesterday at 12:37",
//         text:
//           "@Helena Software quality assurance activity in which one or several humans check a program mainly",
//         vacancy: "Developer",
//         photo: commentPhoto_2,
//       },
//     ],
//     files: [
//       {
//         id: 501,
//         fileType: FILE_TYPE.PDF,
//         fileName: "Redesign Brief 2019.pdf",
//         fileSize: 159,
//       },
//       {
//         id: 502,
//         image: fileMock,
//         fileName: "Header.png",
//         fileSize: 129,
//       },
//     ],
//   },
//   {
//     id: 103,
//     done: false,
//     date: "Mon, Dec 24",
//     title: "Two-factor authentication to make my private data more secure",
//     image: photo_3,
//     tag: "Design",
//     tagType: TAG_TYPE.simple,
//     type: TASK_TYPE.BACKLOG,
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//     comments: [],
//   },
// ];
//
// export const toDo: taskItemsType[] = [
//   {
//     id: 201,
//     done: false,
//     title: "An option to search in current projects or in all projects",
//     image: photo_1,
//     tag: "Design",
//     date: "Mon, Dec 24",
//     tagType: TAG_TYPE.simple,
//     type: TASK_TYPE.TODO,
//     comments: [],
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//   },
//   {
//     id: 202,
//     done: false,
//     date: "Mon, Dec 24",
//     title: "Account for teams and personal in bottom style",
//     image: photo_2,
//     tag: "Marketing",
//     tagType: TAG_TYPE.secondary,
//     type: TASK_TYPE.TODO,
//     comments: [],
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//   },
//   {
//     id: 203,
//     done: false,
//     date: "Mon, Dec 24",
//     title:
//       "Listing on Product Hunt so that we can reach as many potential users",
//     image: photo_3,
//     tag: "Design",
//     tagType: TAG_TYPE.simple,
//     type: TASK_TYPE.TODO,
//     comments: [],
//     description:
//       "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
//   },
// ];
