import { QueryKey, useMutation, useQuery } from "@tanstack/react-query";

import {
  getVerificationCode,
  postVerificationCode,
  VerificationCodeQueryParams,
  PostVerificationCodeQueryParams,
} from "../../api/verificationCode";

export function useVerificationCode(
  queryKey: QueryKey,
  params: VerificationCodeQueryParams
) {
  // refetch 하기 전까지는 fetch하지 않도록 하기
  return useQuery(queryKey, () => getVerificationCode(params), {
    enabled: false,
  });
}
export function usePostVerificationCode(
  queryKey: QueryKey,
  params: PostVerificationCodeQueryParams
) {
  return useMutation(queryKey, () => postVerificationCode(params));
}
