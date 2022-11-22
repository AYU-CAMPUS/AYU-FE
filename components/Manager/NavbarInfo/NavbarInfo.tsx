import React from "react";

interface IComponentListProps {
  component: React.ReactElement;
  content: string;
  id: number;
}

interface INavInfoProps {
  selectNavbarComponentList: IComponentListProps[];
  selectNavbar: string;
}

export default function NavbarInfo({
  selectNavbarComponentList,
  selectNavbar,
}: INavInfoProps) {
  return (
    <>
      {selectNavbarComponentList
        .filter(list => list.content === selectNavbar)
        .map(list => {
          return <div key={list.id}>{list.component}</div>;
        })}
    </>
  );
}
