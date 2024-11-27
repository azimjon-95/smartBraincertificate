import { useState, useEffect } from "react";
import axios from "../api/api";

const useIdNode = (route) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/certificate/nodejs")
      .then((response) => {
        
        setData(response?.data)
      })
      .catch((err) => console.log(err));

  }, [route]);
  if (data?.length < 10) {
    return ["NODE000" + (data.length + 1)];
  } else if (data?.length <= 99) {
    return ["NODE00" + (data.length + 1)];
  } else if (data?.length <= 999) {
    return ["NODE0" + (data.length + 1)];
  } else {
    return "NODE" + [data?.length + 1];
  }
};

export { useIdNode };
