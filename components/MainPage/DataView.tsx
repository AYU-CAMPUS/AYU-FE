import * as Styled from "./DataView.style";

interface DataViewProps {
  title: string;
  description?: string;
}

export default function DataView({ title, description }: DataViewProps) {
  return (
    <Styled.DataViewWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </Styled.DataViewWrapper>
  );
}
