import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { signUp, SignUpQueryParams } from "../../api/signUp";

export function useSignUp(params: SignUpQueryParams) {
  const router = useRouter();

  return useMutation(() => signUp(params), {
    onSuccess: router.reload,
    onError: (err: Error) => console.log(err),
  });
}
