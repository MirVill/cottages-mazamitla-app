import Card from "../../Utils/Card";
const DescriptionCard = (props) => {
  return (
    <Card>
      <h2>
        {props.icon} {props.title}
      </h2>
      <p>{props.description}</p>
    </Card>
  );
};
export default DescriptionCard;
