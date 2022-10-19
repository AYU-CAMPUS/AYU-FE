import React from "react";

import * as Styled from "./GuideMessage.style";

interface Props {
  errMsg?: string;
  okMsg?: string;
}

function GuideMessage({ errMsg, okMsg }: Props) {
  return (
    <Styled.GuideMessage>
      <Styled.ErrMsg>{errMsg}</Styled.ErrMsg>
      <Styled.OkMsg>{okMsg}</Styled.OkMsg>
    </Styled.GuideMessage>
  );
}

export default GuideMessage;
