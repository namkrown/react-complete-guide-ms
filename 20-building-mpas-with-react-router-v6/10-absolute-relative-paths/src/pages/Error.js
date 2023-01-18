import MainNavigation from "../components/MainNavigation";
import css from "./Error.module.css";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className={css.content}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
