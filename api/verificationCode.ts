import axios from "axios";

import api from "./config";

export interface VerificationCodeQueryParams {
  email: string;
}

export async function getVerificationCode(params: VerificationCodeQueryParams) {
  const { data } = await axios.get(`${api}/user/sign-up/verification-code`, {
    params,
  });

  return data;
}

export interface PostVerificationCodeQueryParams {
  verificationCodeToken: string;
  verificationUserInput: string;
}

export async function postVerificationCode(
  params: PostVerificationCodeQueryParams
) {
  const { verificationUserInput, verificationCodeToken } = params;

  const { data } = await axios.post(
    `${api}/user/sign-up/confirm/verification-code`,
    {
      number: verificationUserInput,
    },
    {
      // 헤더에 verificationCodeToken를 넣어서 전달한다.
      headers: {
        verificationCode: verificationCodeToken,
      },
    }
  );

  return data;
}
