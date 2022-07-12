import axios from "axios";

export const banner = async (setData) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=17131cb1e2235f227fd8cfe37bb6df81"
    );
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
