import axios from "axios";

import api from "./config";

export interface GetRegisteredBoardItem {
  boardId: string;
}

export const getRegisteredBoardItem = ({ boardId }: GetRegisteredBoardItem) => {
  return axios.get(`${api}/baord/modifiable/${boardId}`);
};
