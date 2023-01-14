import { Dispatch, SetStateAction } from "react";
import { grades } from "../data";
import * as Styled from "./GradeSelection.style";

interface IGradeProps {
  grade: string;
  id: number;
}

interface GradeSelectionProps {
  selectDepartmentNav: string;
  selectGrade: number[];
  setSelectGrade: Dispatch<SetStateAction<number[]>>;
}

export default function GradeSelection({ ...props }: GradeSelectionProps) {
  const handleGradeClick = (grade: IGradeProps) => {
    props.setSelectGrade(prev => {
      const temp = [...prev];
      if (temp.includes(grade.id)) temp.splice(temp.indexOf(grade.id), 1);
      else temp.push(grade.id);
      return temp;
    });
  };

  return (
    <Styled.GradeSelection>
      <p>학년</p>
      {grades.map(grade => {
        const isSelected = props.selectGrade.includes(grade.id);
        return (
          <div key={grade.id + props.selectDepartmentNav}>
            <input
              type="checkbox"
              value={grade.id}
              onClick={() => {
                handleGradeClick(grade);
              }}
            />
            <Styled.Label htmlFor="label" isSelected={isSelected}>
              {grade.grade}
            </Styled.Label>
          </div>
        );
      })}
    </Styled.GradeSelection>
  );
}
