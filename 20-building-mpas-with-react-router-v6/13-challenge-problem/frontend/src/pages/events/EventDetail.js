import { Link } from "react-router-dom";

//import EventItem from "../../components/EventItem";

function EventDetailPage() {
  return (
    <div>
      <p>Event Detail</p>
      <p>
        <Link to="edit">Edit</Link>
      </p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
  /*
  return (
    <div>
      <p>Event Detail</p>
      <EventItem />
      <p>
        <Link to="..">Back</Link>
      </p>
    </div>
  );
  */
}

export default EventDetailPage;
