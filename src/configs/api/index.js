import axios from "axios";
import Cookies from "js-cookie";

export default async function CallAPI({
  url,
  method,
  data,
  token,
  serverToken,
}) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies); // mengembalikan token fake ke asli
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return response.data;
}
