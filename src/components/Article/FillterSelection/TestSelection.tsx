import { Dispatch, SetStateAction } from "react";
import { tests } from "../data";
import * as Styled from "./TestSelection.style";

interface TestSelectionProps {
  selectTest: number[];
  setSelectTest: Dispatch<SetStateAction<number[]>>;
  selectDepartmentNav: string;
}

export default function TestSelection({ ...props }: TestSelectionProps) {
  return (
    <Styled.TestSelection>
      <p>시험</p>
      {tests.map(test => {
        const isSelected = props.selectTest.includes(test.id);
        return (
          <div key={test.id + props.selectDepartmentNav}>
            <input
              type="checkbox"
              value={test.id}
              onClick={() => {
                props.setSelectTest(prev => {
                  const temp = [...prev];
                  if (temp.includes(test.id))
                    temp.splice(temp.indexOf(test.id), 1);
                  else temp.push(test.id);
                  return temp;
                });
              }}
            />
            <Styled.Label htmlFor="label" isSelected={isSelected}>
              {test.test}
            </Styled.Label>
          </div>
        );
      })}
    </Styled.TestSelection>
  );
}
