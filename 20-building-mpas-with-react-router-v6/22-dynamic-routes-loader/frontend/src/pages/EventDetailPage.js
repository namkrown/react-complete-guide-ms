import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const responseData = useLoaderData();
  const event = responseData.event;
  return <EventItem event={event} />;
}

export async function loader(requestInfo) {
  //const request = requestInfo.request;
  const params = requestInfo.params;
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    return json({ message: "Could not fetch event details." }, { status: 500 });
  }
  return response;
}
