import Card from "../Card";

const MazamitlaActivities = (props) => {
const activities = props.activitiesPhotos.map((act) => {
  return <img src={act.photo} alt={act.name} key={act.name} className='activities__photo'/>
})
return <section className='activities__section' >
  <div>
    <h1>{props.title}</h1>
  </div>
  <div className='activities__card-container' >
    {activities}
  </div>
</section>
};
export default MazamitlaActivities;