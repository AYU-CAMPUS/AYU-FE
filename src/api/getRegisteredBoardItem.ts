import { apiInstance } from "./config";

export interface GetRegisteredBoardItem {
  boardId: string;
}

export const getRegisteredBoardItem = ({ boardId }: GetRegisteredBoardItem) => {
  return apiInstance.get(`/board/modifiable/${boardId}`);
};
