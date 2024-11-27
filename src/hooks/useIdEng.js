import { useState, useEffect } from "react";
import axios from "../api/api";

const useIdEng = (route) => {
  const [data, setData] = useState();

  // console.log(data)
  useEffect(() => {

    const getApi = async () => {
      await axios
        .get("/certificate/eng")
        .then((response) => {
          setData(response?.data)
        })
        .catch((err) => console.log(err));
    }

    getApi()
  }, [route]);
  if (data?.length < 10) {
    return ["ENG000" + (data.length + 1)];
  } else if (data?.length <= 99) {
    return ["ENG00" + (data.length + 1)];
  } else if (data?.length <= 999) {
    return ["ENG0" + (data.length + 1)];
  } else {
    return "ENG" + [data?.length + 1];
  }
};

export { useIdEng };
