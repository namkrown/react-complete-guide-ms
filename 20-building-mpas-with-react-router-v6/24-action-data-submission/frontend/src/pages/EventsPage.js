import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const responseData = useLoaderData();
  //console.log("EventsPage responseData=", responseData);
  if (responseData.isError) {
    return <p>{responseData.message}</p>;
  } else {
    const events = responseData.events;
    return <EventsList events={events} />;
  }
}

export async function loader() {
  //console.log("EventsPage::loader-start");

  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  }

  //console.log("EventsPage::loader-end response=", JSON.parse(response));

  return response;
}
