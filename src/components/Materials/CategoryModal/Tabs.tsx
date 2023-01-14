import { css, Global } from "@emotion/react";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

const liPadding = "30px 30px 20px";

const optionsOfTab1 = [
  [
    { label: "예술체육대학", value: "예술쳬육대학", start: 7, end: 11 },
    { label: "사회과학대학", value: "사회과학대학", start: 12, end: 14 },
    { label: "창의융합대학", value: "창의융합대학", start: 15, end: 22 },
    { label: "인문대학", value: "인문대학", start: 2, end: 6 },
    { label: "신학대학", value: "신학대학", start: 0, end: 1 },
  ],
  [
    { label: "영어언어문화", value: "영어언어문화" },
    { label: "중국언어문화학과", value: "중국언어문화학과" },
    { label: "러시아언어문화", value: "러시아언어문화" },
    { label: "국어국문학과", value: "국어국문학과" },
  ],
  [
    { label: "중간고사", value: "중간고사" },
    { label: "기말고사", value: "기말고사" },
    { label: "필기요약", value: "필기요약" },
  ],
];

const optionsOfUniversity = {
  예술체육대학: [
    { label: "공연예술학과", value: "공연예술학과" },
    {
      label: "음악학과",
      value: "음악학과",
    },
    {
      label: "디지털미디어디자인학과",
      value: "디지털미디어디자인학과",
    },
    {
      label: "화장품발명디자인학과",
      value: "화장품발명디자인학과",
    },
    {
      label: "뷰티메디컬디자인학과",
      value: "뷰티메디컬디자인학과",
    },
  ],
  사회과학대학: [
    { label: "글로벌경영학과", value: "글로벌경영학과" },
    { label: "행정학과", value: "행정학과" },
    { label: "관광경영학과", value: "관광경영학과" },
  ],
  창의융합대학: [
    { label: "식품영양학과", value: "식품영양학과" },
    { label: "컴퓨터공학과", value: "컴퓨터공학과" },
    { label: "정보전기전자공학과", value: "정보전기전자공학과" },
    { label: "통계데이터사이언스학과", value: "통계데이터사이언스학과" },
    { label: "소프트웨어학과", value: "소프트웨어학과" },
    { label: "도시정보공학과", value: "도시정보공학과" },
    { label: "환경에너지공학과", value: "환경에너지공학과" },
    { label: "AI융합학과", value: "AI융합학과" },
  ],
  인문대학: [
    { label: "국어국문학과", value: "국어국문학과" },
    { label: "영미언어문화학과", value: "영미언어문화학과" },
    { label: "러시아언어문화학과", value: "러시아언어문화학과" },
    { label: "중국언어문화학과", value: "중국언어문화학과" },
    { label: "유아교육과", value: "유아교육과" },
  ],
  신학대학: [
    { label: "신학과", value: "신학과" },
    { label: "기독교교육과", value: "기독교교육과" },
  ],
};

const optionsOfTab2 = [
  [
    { label: "인성양성", value: "인성양성" },
    { label: "리더쉽", value: "리더쉽" },
    { label: "융합실무", value: "융합실무" },
    { label: "문제해결", value: "문제해결" },
    { label: "글로벌", value: "글로벌" },
    { label: "의사소통", value: "의사소통" },
  ],
  [
    { label: "중간고사", value: "중간고사" },
    { label: "기말고사", value: "기말고사" },
    { label: "필기요약", value: "필기요약" },
  ],
];
const optionsOfTab3 = [
  [
    { label: "레포트", value: "레포트" },
    { label: "한국사", value: "한국사" },
    { label: "컴활자격증", value: "컴활자격증" },
    { label: "토익", value: "토익" },
    { label: "토플", value: "토플" },
    { label: "이력서", value: "이력서" },
    { label: "PPT 템플릿", value: "PPT 템플릿" },
    { label: "논문", value: "논문" },
    { label: "산업기사", value: "산업기사" },
  ],
  [
    { label: "중간고사", value: "중간고사" },
    { label: "기말고사", value: "기말고사" },
    { label: "필기요약", value: "필기요약" },
  ],
];

enum TabIndex {
  "tab1-1" = 0,
  "tab1-2" = 1,
  "tab1-3" = 2,
  "tab2-1" = 3,
  "tab2-2" = 4,
  "tab3-1" = 5,
}

// type ValuesOfTab = [string, string?, string?];
type ValuesOfTab = [string, string, string, string, string, string];
// type ValuesOfTab2 = [string, string];
// type ValuesOfTab3 = [string];

interface RadioContextProps {
  value?: ValuesOfTab;
  onChange: (label: keyof typeof TabIndex, value: string) => void;
  label: string;
}

const RadioContext = createContext<RadioContextProps>({
  value: ["", "", "", "", "", ""],
  label: "",
  onChange: () => null,
});

type RadioGroupProps = {
  children: ReactNode;
  label: string;
} & RadioContextProps;

function RadioGroup({ children, ...rest }: RadioGroupProps) {
  return (
    <fieldset>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  );
}

interface RadioInputProps {
  groupLabel: keyof typeof TabIndex;
  label: string;
  value: string;
  checkedValue: string;
}

function RadioInput({
  groupLabel,
  label,
  value,
  checkedValue,
}: RadioInputProps) {
  const group = useContext(RadioContext);

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <input
        type="radio"
        id={`radioInput-${groupLabel}-${label}`}
        style={{ width: 18, height: 18, marginRight: 5 }}
        value={value || ""}
        checked={checkedValue ? value === checkedValue : undefined}
        onChange={e =>
          group.onChange && group.onChange(groupLabel, e.target.value)
        }
      />
      <label
        htmlFor={`radioInput-${groupLabel}-${label}`}
        style={{ fontWeight: 400, fontSize: 16 }}
      >
        {label}
      </label>
    </span>
  );
}

function Buttons({
  tabIdx,
  completed,
  handleClose,
  handleOK,
}: {
  tabIdx: number;
  completed: boolean[];
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
  handleOK: () => void;
}) {
  // tabIdx에 일치하는 completed가 true면 disbled를 해제
  const disabled = !completed[`${tabIdx}`];

  return (
    <div
      css={[
        css`
          position: absolute;
          bottom: 30px;
          left: calc(50% - 100px);
          width: 100%;
          display: flex;
        `,
      ]}
    >
      <button
        css={[
          css`
            width: 100px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #dedede;
            border-radius: 10px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin-right: 5px;
          `,
        ]}
        type="button"
        onClick={handleClose}
      >
        닫기
      </button>
      <button
        css={[
          css`
            width: 100px;
            height: 40px;
            background: #26409a;
            border-radius: 10px;
            color: white;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            &:disabled {
              background: #dedede;
            }
          `,
        ]}
        type="button"
        disabled={disabled}
        onClick={handleOK}
      >
        선택완료
      </button>
    </div>
  );
}

interface TabComponentProps {
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  closeCategoryDialog: (e?: MouseEvent<HTMLDivElement>) => void;
}

export default function TabComponent({
  setSelectedCategories,
  closeCategoryDialog,
}: TabComponentProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [checked, setChecked] = useState([true, true]);
  const [valueOfTab, setValueOfTab] = useState<ValuesOfTab>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    if (tabIndex === 0) {
      setChecked([true, false, false]);
    }
    if (tabIndex === 1) {
      setChecked([false, true, false]);
    }
    if (tabIndex === 2) {
      setChecked([false, false, true]);
    }
  }, [tabIndex]);

  useEffect(() => {
    if (valueOfTab[0]) {
      setChecked([false, false]);
    }
    if (valueOfTab[3]) {
      setChecked([false, false]);
    }
  }, [valueOfTab]);

  const handleTabClick = (index: number) => {
    setTabIndex(index);
    // tab을 변경하면 체크했던 항목을 모두 삭제(0~3 : 1번탭, 4~5 : 2번탭, 6 : 3번탭)
    setValueOfTab(["", "", "", "", "", ""]);
  };

  const handleTabChange = (label: keyof typeof TabIndex, value: string) => {
    setValueOfTab(prev => {
      const newValue = [...prev];
      newValue[TabIndex[`${label}`]] = value || "";
      return newValue as ValuesOfTab;
    });
  };

  const [completed, setCompleted] = useState([false, false, false]);

  useEffect(() => {
    // tabIndex에 해당하는 valueOfTab에 값이 모두 들어있으면 completed를 true로 변경
    const tab1 = valueOfTab.slice(0, 3);
    const tab2 = valueOfTab.slice(3, 5);
    const tab3 = valueOfTab.slice(5, 6);
    const tab1Completed = tab1.every(value => value !== "");
    const tab2Completed = tab2.every(value => value !== "");
    const tab3Completed = tab3.every(value => value !== "");
    setCompleted([tab1Completed, tab2Completed, tab3Completed]);
  }, [valueOfTab]);

  // 닫기 버튼 클릭 시
  const handleClose = () => {
    setTabIndex(0);
    setValueOfTab(["", "", "", "", "", ""]);
    closeCategoryDialog();
  };

  // 선택완료 버튼 클릭 시
  const handleOK = () => {
    if (tabIndex === 0) {
      setSelectedCategories(["1", ...valueOfTab.slice(0, 3)]);
    } else if (tabIndex === 1) {
      setSelectedCategories(["2", ...valueOfTab.slice(3, 5)]);
    } else if (tabIndex === 2) {
      setSelectedCategories(["3", ...valueOfTab.slice(5, 6)]);
    } else {
      alert("선택된 탭이 없습니다.");
    }
    handleClose();
  };

  return (
    <Tabs onSelect={handleTabClick}>
      <Global
        styles={css`
          input[type="radio"] {
            /* Add if not using autoprefixer */
            -webkit-appearance: none;
            appearance: none;
            /* For iOS < 15 to remove gradient background */
            background-color: #fff;
            /* Not removed via appearance */
            margin: 0;
            font: inherit;
            color: #d9d9d9;
            width: 1.14em;
            height: 1.14em;
            border: 0.14em solid #4c4c4c;
            border-radius: 50%;
            display: grid;
            place-content: center;

            &:before {
              content: "";
              margin-top: 0px;
              width: 0.6em;
              height: 0.65em;
              border-radius: 50%;
              transform: scale(0);
              transition: 120ms transform ease-in-out;
              box-shadow: inset 1em 1em #26409a;

              background-color: CanvasText;
            }

            &:checked::before {
              transform: scale(3);
            }

            &:focus {
              outline: max(2px, 0.15em) solid currentColor;
              outline-offset: max(2px, 0.15em);
            }
          }

          // Tab selected customizing
          .react-tabs__tab {
            bottom: 0px !important;
          }

          .react-tabs__tab-list {
            border-bottom: 1px solid #dedede !important;
          }

          .react-tabs__tab.react-tabs__tab--selected {
            border: 1px solid transparent !important;
          }
        `}
      />
      <TabList style={{ display: "flex", justifyContent: "center" }}>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
          }}
        >
          학과별 전공자료
        </Tab>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
          }}
        >
          교양대학 자료
        </Tab>
        <Tab
          style={{
            fontWeight: 500,
            fontSize: 16,
            padding: liPadding,
          }}
        >
          카테고리별 자료
        </Tab>
      </TabList>

      <TabPanel
        style={{
          display: tabIndex === 0 ? "grid" : "none",
        }}
      >
        <RadioGroup
          label="tab1-1"
          value={valueOfTab}
          onChange={handleTabChange}
        >
          <div
            css={[
              css`
                display: ${tabIndex === 0 ? "grid" : "none"};
                grid-template-columns: repeat(3, auto);
                // eslint-disable-next-line sonarjs/no-duplicate-string
                grid-template-rows: repeat(2, auto);
                grid-gap: 30px 30px;
                margin: 20px 57px;
                position: relative;
                // 탭 내에 selected된 input이 없으면 padding-bottom 활성화
                padding-bottom: ${checked[0] ? "126px" : "0px"};
              `,
            ]}
          >
            {optionsOfTab1[0].map(option => (
              <RadioInput
                key={option.label}
                groupLabel="tab1-1"
                label={option.label || ""}
                value={option.value || ""}
                checkedValue={valueOfTab[TabIndex["tab1-1"]]}
              />
            ))}
          </div>
        </RadioGroup>
        {!checked[0] && (
          <>
            <RadioGroup
              label="tab1-2"
              value={valueOfTab}
              onChange={handleTabChange}
            >
              <hr
                css={[
                  css`
                    margin: 0 auto;
                    width: calc(100% - 80px);
                  `,
                ]}
              />
              <div
                css={[
                  css`
                    display: ${tabIndex === 0 ? "grid" : "none"};
                    grid-template-columns: repeat(3, auto);
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    grid-template-rows: repeat(2, auto);
                    grid-gap: 30px 30px;
                    margin: 20px 57px;
                    position: relative;
                  `,
                ]}
              >
                {/* 첫 섹션 선택 시 추가로 보여주는 섹션 */}
                {(valueOfTab[
                  TabIndex["tab1-1"]
                ] as keyof typeof optionsOfUniversity) &&
                  optionsOfUniversity[
                    valueOfTab[
                      TabIndex["tab1-1"]
                    ] as keyof typeof optionsOfUniversity
                  ].map(option => (
                    <RadioInput
                      key={option.label}
                      groupLabel="tab1-2"
                      label={option.label || ""}
                      value={option.value || ""}
                      checkedValue={valueOfTab[TabIndex["tab1-2"]]}
                    />
                  ))}
              </div>
            </RadioGroup>
            <RadioGroup
              label="tab1-3"
              value={valueOfTab}
              onChange={handleTabChange}
            >
              <hr
                css={[
                  css`
                    margin: 0 auto;
                    width: calc(100% - 80px);
                  `,
                ]}
              />
              <div
                css={[
                  css`
                    display: ${tabIndex === 0 ? "grid" : "none"};
                    grid-template-columns: repeat(3, auto);
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    grid-template-rows: repeat(2, auto);
                    grid-gap: 30px 30px;
                    margin: 20px 57px;
                    position: relative;
                    padding-bottom: 53px;
                  `,
                ]}
              >
                {optionsOfTab1[2].map(option => (
                  <RadioInput
                    key={option.label}
                    groupLabel="tab1-3"
                    label={option.label || ""}
                    value={option.value || ""}
                    checkedValue={valueOfTab[TabIndex["tab1-3"]]}
                  />
                ))}
              </div>
            </RadioGroup>
          </>
        )}
        <Buttons
          tabIdx={0}
          completed={completed}
          handleClose={handleClose}
          handleOK={handleOK}
        />
      </TabPanel>
      {/* @ : 교양대학 자료 */}
      <TabPanel
        style={{
          display: tabIndex === 1 ? "grid" : "none",
        }}
      >
        <RadioGroup
          label="tab2-1"
          value={valueOfTab}
          onChange={handleTabChange}
        >
          <div
            css={[
              css`
                display: ${tabIndex === 1 ? "grid" : "none"};
                grid-template-columns: repeat(4, auto);
                // eslint-disable-next-line sonarjs/no-duplicate-string
                grid-template-rows: repeat(2, auto);
                grid-gap: 30px 30px;
                margin: 20px 57px;
                position: relative;
                // 탭 내에 selected된 input이 없으면 padding-bottom 활성화
                padding-bottom: ${checked[1] ? "126px" : "0px"};
              `,
            ]}
          >
            {optionsOfTab2[0].map(option => (
              <RadioInput
                key={option.label}
                groupLabel="tab2-1"
                label={option.label || ""}
                value={option.value || ""}
                checkedValue={valueOfTab[TabIndex["tab2-1"]]}
              />
            ))}
          </div>
        </RadioGroup>
        {!checked[1] && (
          <RadioGroup
            label="tab2-2"
            value={valueOfTab}
            onChange={handleTabChange}
          >
            <hr
              css={[
                css`
                  margin: 0 auto;
                  width: calc(100% - 80px);
                `,
              ]}
            />
            <div
              css={[
                css`
                  display: ${tabIndex === 1 ? "grid" : "none"};
                  grid-template-columns: repeat(3, auto);
                  // eslint-disable-next-line sonarjs/no-duplicate-string
                  grid-template-rows: repeat(2, auto);
                  grid-gap: 30px 30px;
                  margin: 20px 57px;
                  position: relative;
                  padding-bottom: 53px;
                `,
              ]}
            >
              {/* 첫 섹션 선택 시 추가로 보여주는 섹션 */}
              {/*  eslint-disable-next-line sonarjs/no-identical-functions */}
              {optionsOfTab2[1].map(option => (
                <RadioInput
                  key={option.label}
                  groupLabel="tab2-2"
                  label={option.label || ""}
                  value={option.value || ""}
                  checkedValue={valueOfTab[TabIndex["tab2-2"]]}
                />
              ))}
            </div>
          </RadioGroup>
        )}
        <Buttons
          tabIdx={1}
          completed={completed}
          handleClose={handleClose}
          handleOK={handleOK}
        />
      </TabPanel>
      {/* @ : 카테고리별 자료 */}
      <TabPanel
        style={{
          display: tabIndex === 2 ? "grid" : "none",
        }}
      >
        <RadioGroup
          label="tab3-1"
          value={valueOfTab}
          onChange={handleTabChange}
        >
          <div
            css={[
              css`
                display: ${tabIndex === 2 ? "grid" : "none"};
                grid-template-columns: repeat(4, auto);
                // eslint-disable-next-line sonarjs/no-duplicate-string
                grid-template-rows: repeat(2, auto);
                grid-gap: 30px 30px;
                margin: 20px 57px;
                position: relative;
                padding-bottom: ${checked[2] ? "126px" : "0px"};
                padding-bottom: 73px;
              `,
            ]}
          >
            {optionsOfTab3[0].map(option => (
              <RadioInput
                key={option.label}
                groupLabel="tab3-1"
                label={option.label || ""}
                value={option.value || ""}
                checkedValue={valueOfTab[TabIndex["tab3-1"]]}
              />
            ))}
          </div>
        </RadioGroup>
        <Buttons
          tabIdx={2}
          completed={completed}
          handleClose={handleClose}
          handleOK={handleOK}
        />
      </TabPanel>
    </Tabs>
  );
}
