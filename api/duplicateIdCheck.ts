import axios from "axios";

import api from "./config";

export interface DuplicateIdCheckQueryParams {
  userId: string;
}

export async function getDuplicateIdCheck(params: DuplicateIdCheckQueryParams) {
  const { data } = await axios.get(`${api}/user/existence-id`, {
    params,
  });

  return data;
}
