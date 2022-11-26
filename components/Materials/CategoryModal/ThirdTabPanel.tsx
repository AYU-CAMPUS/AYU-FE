import React from "react";
import { TabPanel } from "react-tabs";

interface ThirdTabPanelProps {
  tabIndex: number;
}

function ThirdTabPanel({ tabIndex }: ThirdTabPanelProps) {
  return (
    <TabPanel
      style={{
        display: tabIndex === 2 ? "grid" : "none",
        gridTemplateColumns: "repeat(4,auto)",
        gridTemplateRows: "repeat(2,auto)",
        gridGap: "30px 25px",
        margin: "20px 46px",
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
          id="tab2-1"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-1" style={{ fontWeight: 400, fontSize: 16 }}>
          레포트
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
          id="tab2-2"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-2" style={{ fontWeight: 400, fontSize: 16 }}>
          한국사
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
          id="tab2-3"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-3" style={{ fontWeight: 400, fontSize: 16 }}>
          컴활 자격증
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
          id="tab2-4"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-4" style={{ fontWeight: 400, fontSize: 16 }}>
          토익
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
          id="tab2-5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-5" style={{ fontWeight: 400, fontSize: 16 }}>
          토플
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
          id="tab2-5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-5" style={{ fontWeight: 400, fontSize: 16 }}>
          이력서
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
          id="tab2-5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-5" style={{ fontWeight: 400, fontSize: 16 }}>
          PPT 템플릿
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
          id="tab2-5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-5" style={{ fontWeight: 400, fontSize: 16 }}>
          논문
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
          id="tab2-5"
          style={{ width: 18, height: 18, marginRight: 5 }}
        />
        <label htmlFor="tab2-5" style={{ fontWeight: 400, fontSize: 16 }}>
          산업기사
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

export default ThirdTabPanel;
