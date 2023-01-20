import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail</h1>
      <p>Event Id: {params.eventId}</p>
    </>
  );
}
