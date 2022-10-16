import React from "react";

import * as Styled from "./ErrorMessage.style";

interface Props {
  msg: string;
}

function ErrorMessage({ msg }: Props) {
  return <Styled.ErrorMessage>{msg}</Styled.ErrorMessage>;
}

export default ErrorMessage;
