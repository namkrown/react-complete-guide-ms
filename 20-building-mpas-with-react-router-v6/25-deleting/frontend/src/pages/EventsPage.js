import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const responseData = useLoaderData();
  if (responseData.isError) {
    return <p>{responseData.message}</p>;
  } else {
    const events = responseData.events;
    return <EventsList events={events} />;
  }
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  }

  return response;
}
