import { Outlet } from "react-router-dom";
import EventNavigation from "../../components/EventsNavigation";

export default function EventRoot() {
  return (
    <div>
      <EventNavigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
