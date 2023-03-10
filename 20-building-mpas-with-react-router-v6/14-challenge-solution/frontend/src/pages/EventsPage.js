import { Link } from "react-router-dom";

const events = [
  {
    id: "e1",
    title: "Some Event",
  },
  {
    id: "e2",
    title: "Another Event",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
