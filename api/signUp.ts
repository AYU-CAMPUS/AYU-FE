import axios from "axios";

import api from "./config";

export interface SignUpQueryParams {
  userId: string;
  password: string;
  nickName: string;
  // email: string;
}

export async function signUp(params: SignUpQueryParams) {
  return axios.post(`${api}/user/sign-up`, {
    params,
  });
}
