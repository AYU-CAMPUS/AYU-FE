import * as Styled from "./DataView.style";

interface DataViewProps {
  title: string;
  description?: string;
}

export default function DataView({ title, description }: DataViewProps) {
  return (
    <Styled.DataViewWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.DataViewWrapper>
  );
}
