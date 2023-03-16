import { useState } from "react";
import yelp from "../api/yelp";
// react-native start --reset-cache

export default () => {
  const [result, setresult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async id => {
    setresult({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await yelp.get(`/${id}`);
      setresult({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setresult({
        data: null,
        loading: false,
        error: "Something went to hell",
      });
    }
  };
  return [result, searchRestaurant];
};
