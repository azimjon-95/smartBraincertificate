import { useState, useEffect } from "react";
import axios from "../api/api";

const useIdCss = (route) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/certificate/css")
      .then((response) => {
        setData(response?.data)
      })
      .catch((err) => console.log(err));

  }, [route]);
  if (data?.length < 10) {
    return ["CSS000" + (data.length + 1)];
  } else if (data?.length <= 99) {
    return ["CSS00" + (data.length + 1)];
  } else if (data?.length <= 999) {
    return ["CSS0" + (data.length + 1)];
  } else {
    return "CSS" + [data?.length + 1];
  }
};

export { useIdCss };
