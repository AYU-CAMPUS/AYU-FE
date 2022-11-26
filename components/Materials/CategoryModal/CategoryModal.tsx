import React from "react";

import Tabs from "./Tabs";

function CategoryModal() {
  // const [activeTab, setActiveTab] = React.useState(0);

  // const handleTabClick = (index: number) => {
  //   setActiveTab(index);
  // };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        backgroundColor: "white",
      }}
    >
      <Tabs />
    </div>
  );
}

export default CategoryModal;
