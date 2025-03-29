import CallAPI from "@/configs/api";

const ROOT_API = process.env.NEXT_PUBLIC_API_HOST;

export async function SetSignin(data) {
  const url = `${ROOT_API}/api/users/login`;

  return CallAPI({ url, method: "POST", data });
}

export async function SetSignup(data) {
  const url = `${ROOT_API}/api/users/signup`;

  return CallAPI({ url, method: "POST", data });
}
