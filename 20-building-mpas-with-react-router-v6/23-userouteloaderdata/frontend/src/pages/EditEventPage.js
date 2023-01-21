import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const responseData = useRouteLoaderData("event-detail");
  const event = responseData.event;
  return <EventForm event={event} />;
}
