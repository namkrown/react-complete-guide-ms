import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const responseData = useRouteLoaderData("event-detail");
  const event = responseData.event;
  return <EventItem event={event} />;
}

export async function loader(requestInfo) {
  //const request = requestInfo.request;
  const params = requestInfo.params;
  const eventId = params.eventId;
  const url = "http://localhost:8080/events/" + eventId;
  const response = await fetch(url);

  if (!response.ok) {
    return json({ message: "Could not fetch event details." }, { status: 500 });
  }

  return response;
}

export async function action(requestInfo) {
  const request = requestInfo.request;
  const params = requestInfo.params;
  const eventId = params.eventId;
  const url = "http://localhost:8080/events/" + eventId;

  const fetchConfig = {
    //method: "DELETE",
    method: request.method,
  };
  const response = await fetch(url, fetchConfig);

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
