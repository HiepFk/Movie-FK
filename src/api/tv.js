import axios from "axios";

export const getListTv = async (setData, setLoading, setError) => {
  setLoading(true);
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=17131cb1e2235f227fd8cfe37bb6df81"
    );
    setData(res);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    setError(true);
  }
};
