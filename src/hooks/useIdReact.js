import { useState, useEffect } from "react";
import axios from "../api/api";

const useIdReact = (route) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/certificate/react")
      .then((response) => {

        setData(response?.data)
      })
      .catch((err) => console.log(err));

  }, [route]);
  if (data?.length < 10) {
    return ["REACT000" + (data.length + 1)];
  } else if (data?.length <= 99) {
    return ["REACT00" + (data.length + 1)];
  } else if (data?.length <= 999) {
    return ["REACT0" + (data.length + 1)];
  } else {
    return "REACT" + [data?.length + 1];
  }
};

export { useIdReact };
