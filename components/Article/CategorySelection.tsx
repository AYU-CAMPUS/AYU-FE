import { useState } from "react";
import { grades, tests } from "./data";
import * as Styled from "./CategorySelection.style";

interface TCategorySelection {
  department: string;
  id: number;
}
interface CategorySelectionProps {
  departmentCategory: TCategorySelection[];
}

export default function CategorySelection({
  departmentCategory,
}: CategorySelectionProps) {
  const [selectDepartment, setSelectDepartment] = useState<number[]>([]);
  const [selectGrade, setSelectGrade] = useState<number[]>([]);
  const [selectTest, setSelectTest] = useState<number[]>([]);

  return (
    <Styled.CategorySelectionWrapper>
      <Styled.MajorSelection>
        <p>학과</p>
        <Styled.MajorWrapper>
          {departmentCategory?.map(department => {
            const isSelected = selectDepartment.includes(department.id);
            return (
              <div key={department.id}>
                <input
                  type="checkbox"
                  onClick={() => {
                    setSelectDepartment(prev => {
                      const temp = [...prev];
                      if (temp.includes(department.id))
                        temp.splice(temp.indexOf(department.id), 1);
                      else temp.push(department.id);
                      return temp;
                    });
                  }}
                  value={department.id}
                />
                <Styled.Label htmlFor="label" isSelected={isSelected}>
                  {department.department}
                </Styled.Label>
              </div>
            );
          })}
        </Styled.MajorWrapper>
      </Styled.MajorSelection>

      <Styled.GradeSelection>
        <p>학년</p>
        {grades.map(grade => {
          const isSelected = selectGrade.includes(grade.id);
          return (
            <div key={grade.id}>
              <input
                type="checkbox"
                value={grade.id}
                onClick={() => {
                  setSelectGrade(prev => {
                    const temp = [...prev];
                    if (temp.includes(grade.id))
                      temp.splice(temp.indexOf(grade.id), 1);
                    else temp.push(grade.id);
                    return temp;
                  });
                }}
              />
              <Styled.Label htmlFor="label" isSelected={isSelected}>
                {grade.grade}
              </Styled.Label>
            </div>
          );
        })}
      </Styled.GradeSelection>

      <Styled.TestSelection>
        <p>시험</p>
        {tests.map(test => {
          const isSelected = selectTest.includes(test.id);
          return (
            <div key={test.id}>
              <input
                type="checkbox"
                value={test.id}
                onClick={() => {
                  setSelectTest(prev => {
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
    </Styled.CategorySelectionWrapper>
  );
}
