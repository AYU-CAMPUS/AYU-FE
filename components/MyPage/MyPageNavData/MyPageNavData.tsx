import React from "react";
import * as Styled from "./style";

export interface IComponentProps {
  component: React.ReactElement;
  menu: string;
  id: number;
}

interface ComponentProps {
  selectMenuNav: string;
  selectMenuComponentList: IComponentProps[];
}

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
