export interface IPostsProps {
  content: string;
  title: string;
  writer: string;
  boardCategory: {
    category: string;
    departmentType: string;
    fileType: string;
    gradeType: string;
    subjectName: string;
    professorName: string;
  };
  views: number;
  numberOfFilePages: number;
  numberOfSuccessfulExchanges: number;
  createdDate: string;
  exchangeType: number;
  desiredData: [string];
}
