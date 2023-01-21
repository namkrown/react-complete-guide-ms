import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return <EventForm />;
}

export async function action(requestInfo) {
  //const params = requestInfo.params;
  const request = requestInfo.request;
  const formData = await request.formData();

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const url = "http://localhost:8080/events/";
  const body = JSON.stringify(eventData);
  const headers = {
    "Content-Type": "application/json",
  };
  const fetchConfig = {
    method: "POST",
    headers: headers,
    body: body,
  };
  const response = await fetch(url, fetchConfig);

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
}
