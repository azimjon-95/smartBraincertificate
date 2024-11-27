import { useState, useEffect, useContext } from "react";
import axios from "../api/api";
import { AuthContext } from "../context/AuthContext";

const useIdJs = (route) => {
  const { setIsLoading } = useContext(AuthContext)
  const [data, setData] = useState([]);
  console.log("data-> ", data)

  useEffect(() => {
    const getApi = async () => {
      // setIsLoading(true)

      await axios
        .get(`/certificate/checkaddindex/${route}`)
        .then((response) => {
          setData(response.data)
          console.log(response?.data)

        })
        .catch((err) => console.log(err));
      // setJsId(data)
    }


    getApi()
  }, [route]);
  return data;
};

export { useIdJs };
