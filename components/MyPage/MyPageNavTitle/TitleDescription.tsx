interface IProps {
  title: string;
  description: string;
}

function TitleDescription({ title, description }: IProps) {
  return (
    <div className="titleDescription">
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}
export default TitleDescription;
