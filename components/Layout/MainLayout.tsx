import React from "react";
import Header from "../Header/Header";
import { Container } from "./MainLayout.style";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
