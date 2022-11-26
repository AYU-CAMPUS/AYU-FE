import React from "react";
import { TabPanel } from "react-tabs";

interface FirstTabPanelProps {
  tabIndex: number;
}

function FirstTabPanel({ tabIndex }: FirstTabPanelProps) {
  return (
    <TabPanel
      style={{
        display: tabIndex === 0 ? "grid" : "none",
        gridTemplateColumns: "repeat(3,auto)",
        gridTemplateRows: "repeat(2,auto)",
        gridGap: "30px 30px",
        margin: "20px 57px",
        paddingBottom: 126,
        position: "relative",
      }}
    >
      <span
        style={{
          display: "flex",
          // 임시 주석
          // eslint-disable-next-line sonarjs/no-duplicate-string
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="tab"
          id="tab1"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab1" style={{ fontWeight: 400, fontSize: 16 }}>
          예술체육대학
        </label>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="tab"
          id="tab2"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2" style={{ fontWeight: 400, fontSize: 16 }}>
          사회과학대학
        </label>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="tab"
          id="tab3"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab3" style={{ fontWeight: 400, fontSize: 16 }}>
          창의융합대학
        </label>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="tab"
          id="tab4"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab4" style={{ fontWeight: 400, fontSize: 16 }}>
          인문대학
        </label>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="radio"
          name="tab"
          id="tab5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab5" style={{ fontWeight: 400, fontSize: 16 }}>
          신학대학
        </label>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "calc(50% - 100px)",
          width: "100%",
          display: "flex",
        }}
      >
        <button
          style={{
            width: 100,
            height: 40,
            background: "#FFFFFF",
            border: "1px solid #DEDEDE",
            borderRadius: "10px",
          }}
          type="button"
        >
          닫기
        </button>
        <button
          style={{
            width: 100,
            height: 40,
            background: "#26409A",
            borderRadius: 10,
            color: "white",
          }}
          type="button"
        >
          선택완료
        </button>
      </div>
    </TabPanel>
  );
}

export default FirstTabPanel;
