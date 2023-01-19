import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log("error=", error);

  return (
    <div>
      <p>Error</p>
      <p>
        <i>status={error ? error.statusText : ""}</i>
      </p>
      <p>
        <i>message={error ? error.message : ""}</i>
      </p>
    </div>
  );
}
