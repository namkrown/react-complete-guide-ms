import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  console.log("EventDetailPage-start");

  const responseData = useRouteLoaderData("event-detail");
  console.log("EventDetailPage responseData=", responseData);

  const event = responseData.event;
  console.log("EventDetailPage event=", event);

  return <EventItem event={event} />;
}

export async function loader(requestInfo) {
  //console.log("EventDetailPage::loader-start requestInfo=", requestInfo);
  //const request = requestInfo.request;
  const params = requestInfo.params;
  console.log("EventDetailPage::loader params=" + params);

  const eventId = params.eventId;
  console.log("EventDetailPage::loader eventId=" + eventId);

  const fetchUrl = "http://localhost:8080/events/" + eventId;
  console.log("fetchUrl=", fetchUrl);

  const response = await fetch(fetchUrl);
  console.log("response.status=", response.status);
  console.log("response.statusText=", response.statusText);

  if (!response.ok) {
    return json({ message: "Could not fetch event details." }, { status: 500 });
  }

  //console.log("EventDetailPage::loader-end response=", JSON.parse(response));

  return response;
}
