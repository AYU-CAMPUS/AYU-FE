import React from "react";
import Header from "../Header/Header";

interface Props {
  children: React.ReactNode;
  links?: React.ReactNode[];
  notifications?: React.ReactNode[];
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
