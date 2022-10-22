import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, Header } from "./MainLayout.style";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <a>
            <Image
              alt="ayu campus logo"
              src="/images/ayu-campus-logo.svg"
              width="212px"
              height="43px"
            />
          </a>
        </Link>
      </Header>
      {children}
    </Container>
  );
}
