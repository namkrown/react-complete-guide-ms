import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/auth";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const submit = useSubmit();
  const authToken = useLoaderData();
  useEffect(() => {
    console.log("RootLayout::useEffect-start authToken=", authToken);
    if (authToken === "EXPIRED") {
      console.log("RootLayout::useEffect authToken EXPIRED");
      submit(null, { action: "/logout", method: "post" });
    } else if (authToken) {
      console.log("RootLayout::useEffect-start calculateTokenDuration");
      const tokenDuration = getTokenDuration();
      console.log(tokenDuration);

      setTimeout(() => {
        console.log("AuthToken timer, logout");
        submit(null, { action: "/logout", method: "post" });
      }, tokenDuration);
    } else {
      // Do nothing
      console.log("RootLayout::useEffect no token");
    }
    console.log("RootLayout::useEffect-end");
  }, [authToken, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
