import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function useRedirectNonMentors(callBack = () => {}) {
  let history = useHistory();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    console.log(token);
    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, { headers: { token } })
      .then((res) => {
        if (res.status !== 200) {
          history.push("/");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("role", data.role);
        if (data == "not authorized" || data.role == "Student") {
          history.push("/");
        } else {
          callBack();
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return null;
}
