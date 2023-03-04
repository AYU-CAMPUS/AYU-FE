import DashBoardIcon from "../../public/images/dashBoard.svg";
import ListIcon from "../../public/images/list.svg";
import UserManagementIcon from "../../public/images/userManagement.svg";
import CommentReportIcon from "../../public/images/commentReport.svg";
import articleReportIcon from "../../public/images/articleReport.svg";

export const navbarData = [
  {
    content: "Dashboard",
    id: 0,
    image: DashBoardIcon,
  },
  {
    content: "신청글 리스트",
    id: 1,
    image: ListIcon,
  },
  {
    content: "유저관리",
    id: 2,
    image: UserManagementIcon,
  },
  {
    content: "댓글 신고",
    id: 3,
    image: CommentReportIcon,
  },
  {
    content: "게시글 신고",
    id: 4,
    image: articleReportIcon,
  },
];
