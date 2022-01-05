import Card from "../../Utils/Card";
const AboutUsCard = (props) => {
  return (
    <Card>
      <h3 className="contacts__meet-us--title">{props.title}</h3>
      <p>{props.text}</p>
    </Card>
  );
};
export default AboutUsCard;
