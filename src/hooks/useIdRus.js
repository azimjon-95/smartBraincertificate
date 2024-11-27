import { useState, useEffect } from "react";
import axios from "../api/api";

const useIdRus = (route) => {
  const [data, setData] = useState();

  // console.log(data)
  useEffect(() => {

    const getApi = async () => {
      await axios
        .get("/certificate/rus")
        .then((response) => {

          setData(response?.data)
        })
        .catch((err) => console.log(err));
    }

    getApi()
  }, [route]);
  if (data?.length < 10) {
    return ["RUS000" + (data.length + 1)];
  } else if (data?.length <= 99) {
    return ["RUS00" + (data.length + 1)];
  } else if (data?.length <= 999) {
    return ["RUS0" + (data.length + 1)];
  } else {
    return "RUS" + [data?.length + 1];
  }
};

export { useIdRus };