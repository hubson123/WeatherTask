import { API_KEY } from "./constants";

export default function fetchData(url: string) {
  return fetch(url).then((res) => {
    if (res.ok) return res.json();
    return res.json().then((json) => Promise.reject(json));
  });
}
