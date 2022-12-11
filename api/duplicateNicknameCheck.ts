import axios from "axios";

import api from "./config";

export interface DuplicateNicknameCheckQueryParams {
  nickName: string;
}

export async function getDuplicateNicknameCheck(
  params: DuplicateNicknameCheckQueryParams
) {
  const { data } = await axios.get(`${api}/user/existence-nickname`, {
    params,
  });

  return data;
}
