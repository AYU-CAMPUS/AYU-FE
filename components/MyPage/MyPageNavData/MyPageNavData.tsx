import React from "react";
import * as Styled from "./style";
import { ComponentProps } from "./types";

export default function MyPageNavData({
  selectMenuComponentList,
  selectMenuNav,
}: ComponentProps) {
  return (
    <Styled.MyPageNavDataWrapper>
      {selectMenuComponentList
        .filter(component => component.menu === selectMenuNav)
        .map(component => (
          <div key={component.id}>{component.component}</div>
        ))}
    </Styled.MyPageNavDataWrapper>
  );
}
