import React from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import tw from "twin.macro";

interface Props {
  children: React.ReactNode;
  links?: React.ReactNode[];
  notifications?: React.ReactNode[];
}

export default function MainLayout({ children, links, notifications }: Props) {
  return (
    <div
      css={[
        tw``,
        css`
          width: 100vw;
          height: 100vh;
        `,
      ]}
    >
      <header
        css={[
          tw``,
          css`
            width: 100vw;
            height: 103px;
            padding-top: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid #abaeaf;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `,
        ]}
      >
        {/* // 로고 링크 */}
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
        {/* 로고를 제외하고 우측 배치 */}
        <section
          css={[
            css`
              display: flex;
              align-items: center;

              & > * {
                margin-left: 50px;
              }

              span {
                a {
                  display: inline-block;
                  font-weight: 400px;
                  font-size: 16px;
                  line-height: 20px;
                }
              }
            `,
          ]}
        >
          {/* 링크들 */}
          {links?.map(link => {
            return link;
          })}
          {/* 알림 */}
          {notifications?.map(notification => {
            return notification;
          })}
        </section>
      </header>
      <main>{children}</main>
    </div>
  );
}
