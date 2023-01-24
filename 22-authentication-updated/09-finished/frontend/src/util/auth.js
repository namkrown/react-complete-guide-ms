import { redirect } from "react-router-dom";

export function getTokenDuration() {
  console.log("auth::getTokenDuration-start");
  const expirationDateTxt = localStorage.getItem("authTokenExpiration");
  const expirationDate = new Date(expirationDateTxt);

  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  console.log("auth::getTokenDuration-start duration=", duration);
  return duration;
}

export function getAuthToken() {
  console.log("auth::getAuthToken-start");

  let authToken = localStorage.getItem("authToken");
  if (authToken) {
    const tokenDuration = getTokenDuration();
    if (tokenDuration <= 0) {
      authToken = "EXPIRED";
    }
  }
  console.log("auth::getAuthToken-end authToken=", authToken);
  return authToken;
}

export function setAuthToken(authToken) {
  console.log("auth::setAuthToken-start");
  const prevAuthToken = getAuthToken();
  localStorage.setItem("authToken", authToken);

  if (prevAuthToken !== authToken) {
    console.log("auth::setAuthToken calculate token duration");
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);
    const expirationDateTxt = expirationDate.toISOString();
    localStorage.setItem("authTokenExpiration", expirationDateTxt);
    console.log("auth::setAuthToken expirationDateTxt=", expirationDateTxt);
  }
  console.log("auth::setAuthToken-end");
}

export function removeAuthToken() {
  console.log("auth::removeAuthToken-start");
  localStorage.removeItem("authToken");
  localStorage.removeItem("authTokenExpiration");
  console.log("auth::removeAuthToken-end");
}
export function checkAuthLoader() {
  const authToken = getAuthToken();

  if (!authToken) {
    return redirect("/auth");
  }
}
