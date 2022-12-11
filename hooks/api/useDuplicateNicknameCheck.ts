import { QueryKey, useQuery } from "@tanstack/react-query";

import {
  getDuplicateNicknameCheck,
  DuplicateNicknameCheckQueryParams,
} from "../../api/duplicateNicknameCheck";

export function useDuplicateNicknameCheck(
  queryKey: QueryKey,
  params: DuplicateNicknameCheckQueryParams
) {
  // refetch 하기 전까지는 fetch하지 않도록 하기
  return useQuery(queryKey, () => getDuplicateNicknameCheck(params), {
    enabled: false,
  });
}
