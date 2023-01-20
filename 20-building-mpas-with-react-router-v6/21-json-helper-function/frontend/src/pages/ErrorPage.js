import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  } else if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
