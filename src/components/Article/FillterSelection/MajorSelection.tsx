import React, { Dispatch, SetStateAction } from "react";
import * as Styled from "./MajorSelection.style";

interface IDepartmentProps {
  department: string;
  id: number;
}

interface IDepartmenListtProps {
  department: IDepartmentProps[];
  college: string;
  id: number;
}

interface MajorSelectionProps {
  selectDepartmentNav: string;
  selectDepartment: number[];
  selectDepartmentList: IDepartmenListtProps[];
  setSelectDepartment: Dispatch<SetStateAction<number[]>>;
}

export default function MajorSelection({ ...props }: MajorSelectionProps) {
  return (
    <Styled.MajorSelection>
      <p>학과</p>
      <Styled.MajorWrapper>
        {props.selectDepartmentList
          .filter(
            department => department.college === props.selectDepartmentNav
          )
          .map(department => {
            return (
              <React.Fragment key={department.id}>
                {department.department.map(major => {
                  const isSelected = props.selectDepartment.includes(major.id);
                  return (
                    <div key={major.id}>
                      <input
                        type="checkbox"
                        onClick={() => {
                          props.setSelectDepartment(prev => {
                            const temp = [...prev];
                            if (temp.includes(major.id))
                              temp.splice(temp.indexOf(major.id), 1);
                            else temp.push(major.id);
                            return temp;
                          });
                        }}
                        value={major.id}
                      />
                      <Styled.Label htmlFor="label" isSelected={isSelected}>
                        {major.department}
                      </Styled.Label>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
      </Styled.MajorWrapper>
    </Styled.MajorSelection>
  );
}
