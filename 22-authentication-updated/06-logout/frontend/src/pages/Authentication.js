import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

import { setAuthToken } from "../util/auth";

export default function AuthenticationPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new json({ messge: "Unsupported Mode." }, { status: 422 });
  }

  const formData = await request.formData();

  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const url = "http://localhost:8080/" + mode;
  const headers = {
    "Content-Type": "application/json",
  };
  const fetchConfig = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(authData),
  };

  const response = await fetch(url, fetchConfig);

  if (response.status === 401 || response.status === 422) {
    return response;
  } else if (!response.ok) {
    throw new json({ messge: "Could not authenticate user" }, { status: 500 });
  }

  const responseData = await response.json();
  const authToken = responseData.token;

  //localStorage.setItem("authToken", authToken);
  setAuthToken(authToken);

  return redirect("/");
}
