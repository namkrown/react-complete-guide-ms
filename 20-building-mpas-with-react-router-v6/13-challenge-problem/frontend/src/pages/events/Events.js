//import { Link } from "react-router-dom";

import EventsList from "../../components/EventsList";

const events = [
  {
    id: "e1",
    date: "Event 1: Date",
    title: "Event 1",
    description: "Event 1: Description",
  },
  {
    id: "e2",
    date: "Event 2: Date",
    title: "Event 2",
    description: "Event 2: Description",
  },
  {
    id: "e3",
    date: "Event 3: Date",
    title: "Event 3",
    description: "Event 3: Description",
  },
];

export default function EventsPage() {
  return <EventsList events={events} />;
  /*
  return (
    <div>
      <p>Events</p>
      <p>
        <Link to="new">New Event</Link>
      </p>
      <ul>
        {events.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
*/

  /*
  return (
    <div>
      <p>Events</p>
      <p>
        <Link to="new">New Event</Link>
      </p>
      <ul>
        <li>
          <Link to="e1">Event 1</Link>
        </li>
        <li>
          <Link to="e2">Event 2</Link>
        </li>
      </ul>
    </div>
  );
  */
}
