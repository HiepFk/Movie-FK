import axios from "axios";
const api = process.env.REACT_APP_API_KEY;
export const banner = async (setData) => {
  const link = `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.results.slice(0, 4));
  } catch (error) {
    throw error;
  }
};

export const getTrending = async (type) => {
  const link = `https://developers.themoviedb.org/3/${type}/get-popular-tv-shows?fbclid=IwAR2hPLhy40m5hHL7l-hPpGavji0fUfsrBO9F-HfFcrbWtZKGAm6fsBvYlV8`;
  try {
    const res = await axios.get(link);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTopRated = async (type) => {
  const link = `https://api.themoviedb.org/3/${type}/top_rated?api_key=${api}&language=en-US&page=1`;
  try {
    const res = await axios.get(link);
    return res.data;
  } catch (error) {
    throw error;
  }
};
