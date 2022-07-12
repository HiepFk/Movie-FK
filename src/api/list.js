import axios from "axios";
const api = process.env.REACT_APP_API_KEY;
const localLink = process.env.REACT_APP_API_LINK;

export const pageList = async (setData, type, choise, page, setLoading) => {
  const link = `${localLink}/${type}/${choise}?api_key=${api}&language=en-US&page=${page}`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.results);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};

export const getDetails = async (setData, type, page, setLoading) => {
  const link = `${localLink}/${type}/top_rated?api_key=${api}&language=en-US&page=${page}`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.results);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};

export const searchList = async (setData, type, text, page) => {
  const link = `${localLink}/search/${type}/?api_key=${api}&language=en-US&page=${page}&query=${text}&include_adult=false`;
  try {
    const res = await axios.get(link);
    setData(res?.data?.results);
  } catch (error) {
    throw error;
  }
};
