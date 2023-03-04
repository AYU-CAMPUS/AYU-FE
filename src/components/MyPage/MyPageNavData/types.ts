import React from "react";

export interface IComponentProps {
  component: React.ReactElement;
  menu: string;
  id: number;
}

export interface ComponentProps {
  selectMenuNav: string;
  selectMenuComponentList: IComponentProps[];
}
