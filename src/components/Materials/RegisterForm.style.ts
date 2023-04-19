import styled from "@emotion/styled";

export const Container = styled.section`
  width: 1390px;
  padding-top: 70px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #abaeaf;
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 33px;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const GuideLine = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 8px;
  font-weight: 200;
`;

export const Form = styled.form``;

export const Formrow = styled.div`
  &:after {
    display: table;
    content: " ";
    clear: both;
  }
`;

interface Col1Props {
  height?: string;
  gap?: string;
}

export const Col1 = styled.div<Col1Props>`
  width: 248px;
  border-bottom: 1px solid #dedede;
  border-right: 1px solid #dedede;
  height: ${props => (props.height ? props.height : "120px")};
  padding-left: 12px;
  display: flex;
  align-items: center;
  min-width: 200px;
  float: left;

  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }

  &:after {
    display: table;
    content: " ";
    clear: both;
  }
`;

export const Col2 = styled.div<Col1Props>`
  border-bottom: 1px solid #dedede;
  height: ${props => (props.height ? props.height : "120px")};
  width: calc(100% - 248px);
  padding-left: 25px;
  display: flex;
  align-items: center;
  min-width: 200px;
  float: left;
  gap: ${props => (props.gap ? props.gap : "0")};

  &:after {
    display: table;
    content: " ";
    clear: both;
  }
`;

export const TitleInput = styled.input`
  width: 375px;
  height: 42px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: 15px;
  font-size: 18px;

  &::placeholder {
    font: 16px sans-serif;
    transform: translate(0, 2px);
  }
`;

export const DescriptionTextArea = styled.textarea`
  width: 1090px;
  height: 160px;
  resize: none;
  border: 0.5px solid #abaeaf;
  border-radius: 5px;
  padding-top: 15px;
  padding-left: 15px;
  font-size: 18px;

  &::placeholder {
    font: 18px sans-serif;
  }
`;

export const PageNumberInput = styled.input`
  width: 180px;
  height: 42px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: 15px;
  font-size: 18px;

  &::placeholder {
    font: 16px sans-serif;
    transform: translate(0, 2px);
  }
`;

export const SelectFileLabelButton = styled.label`
  width: 88px;
  height: 31px;
  border: 0.5px solid #abaeaf;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;

export const Label = styled.label`
  float: left;
  padding-right: 10px;
`;

export const SelectFileInput = styled.input`
  display: none;
`;

export const SelectFileGuide = styled.div`
  color: #767777;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;

export const SelectCategory = styled.select`
  width: 180px;
  height: 42px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: 15px;
  color: black;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  &:required:invalid {
    color: #8f9091;
  }
  &[value=""][disabled] {
    display: none;
  }
  &::placeholder {
    color: #8f9091;
    transform: translate(0, 2px);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 65px;
`;

export const ExitButton = styled.button`
  color: white;
  font-weight: 400;
  font-size: 24px;
  background-color: #000000;
  border-radius: 14px;
  width: 261px;
  height: 78px;
  margin-right: 10px;
`;

export const RegisterButton = styled.button`
  color: white;
  font-weight: 400;
  font-size: 24px;
  background-color: #26409a;
  border-radius: 14px;
  width: 261px;
  height: 78px;
`;
