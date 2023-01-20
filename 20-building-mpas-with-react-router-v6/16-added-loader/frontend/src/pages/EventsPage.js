import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

// Code required without leveraging react-router loader
/* 
import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {  
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
    return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}
*/
