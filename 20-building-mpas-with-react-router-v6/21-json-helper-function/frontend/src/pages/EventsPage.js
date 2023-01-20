import { useLoaderData } from "react-router-dom";

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
  const response = await fetch("http://localhost:8080/events1");

  if (!response.ok) {
    //throw { message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  return response;
}

/*
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
    return { isError: true, message: "Could not fetch Events" };
  } else {
    return response;
  }
}
*/
