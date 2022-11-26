import { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";

import FirstTabPanel from "./FirstTabPanel";
import SecondTabPanel from "./SecondTabPanel";
import ThirdTabPanel from "./ThirdTabPanel";

import "react-tabs/style/react-tabs.css";

const liPadding = "30px 30px 20px";

export default function TabComponent() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      style={{
        width: 512,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
      }}
      onSelect={index => {
        console.log(index);
        setTabIndex(index);
      }}
    >
      <TabList style={{ display: "flex", justifyContent: "center" }}>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
            border: "none",
          }}
        >
          학과별 전공자료
        </Tab>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
            border: "none",
          }}
        >
          교양대학 자료
        </Tab>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
            border: "none",
          }}
        >
          카테고리별 자료
        </Tab>
      </TabList>

      <FirstTabPanel tabIndex={tabIndex} />
      {/* @ : 교양대학 자료 */}
      <SecondTabPanel tabIndex={tabIndex} />
      {/* @ : 카테고리별 자료 */}
      <ThirdTabPanel tabIndex={tabIndex} />
    </Tabs>
  );
}
