export function getAuthToken() {
  const authToken = localStorage.getItem("authToken");
  return authToken;
}

export function setAuthToken(authToken) {
  localStorage.setItem("authToken", authToken);
}
