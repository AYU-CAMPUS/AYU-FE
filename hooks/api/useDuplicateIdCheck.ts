import { QueryKey, useQuery } from "@tanstack/react-query";

import {
  getDuplicateIdCheck,
  DuplicateIdCheckQueryParams,
} from "../../api/duplicateIdCheck";

export function useDuplicateIdCheck(
  queryKey: QueryKey,
  params: DuplicateIdCheckQueryParams
) {
  // refetch 하기 전까지는 fetch하지 않도록 하기
  return useQuery(queryKey, () => getDuplicateIdCheck(params), {
    enabled: false,
  });
}
