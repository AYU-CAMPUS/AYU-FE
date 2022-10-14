import React from "react";

export interface MyProps {
  menuNav: string[];
  selectMenuNav: string;
  setSelectMenuNav: React.Dispatch<React.SetStateAction<string>>;
}

export interface MyButtonProps {
  isSelected: boolean;
}
