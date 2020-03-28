import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          location: "Dallas",
          term: searchTerm
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, error];
};
