import CallAPI from "@/configs/api";

const ROOT_API = process.env.NEXT_PUBLIC_API_HOST;

export async function GetCourse() {
  const url = `${ROOT_API}/api/participants/courses`;

  return CallAPI({ url, method: "GET" });
}
export async function GetCourseDetail(id) {
  const url = `${ROOT_API}/api/participants/courses/${id}`;

  return CallAPI({ url, method: "GET" });
}
