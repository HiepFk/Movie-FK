import axios from "axios";
const api = process.env.REACT_APP_API_KEY;
const localLink = process.env.REACT_APP_API_LINK;

export const getDetails = async (setData, type, id, setLoading) => {
  const link = `${localLink}/${type}/${id}?api_key=${api}&language=en-US`;
  try {
    const res = await axios.get(link);
    setData(res?.data);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};
export const getCredits = async (setData, type, id, setLoading) => {
  const link = `${localLink}/${type}/${id}/credits?api_key=${api}&language=en-US`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.cast.slice(0, 10));
    setLoading(false);
  } catch (error) {
    throw error;
  }
};
export const getVideo = async (setData, type, id, setLoading) => {
  const link = `${localLink}/${type}/${id}/videos?api_key=${api}&language=en-US`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.results);
    // setData(res?.data?.results?.slice(0, 1));
    // setData(res?.data?.results?.[0]);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};
