import axios from 'axios';

const BASE_URL = 'https://api.giphy.com/v1/gifs';

const DEFAULT_PARAMS = {
    api_key: process.env.REACT_APP_GIPHY_API_KEY,
    limit: 50,
};

export const fetchCategories = async() => {
  const {data} = await axios.get(`${BASE_URL}/categories`, {
    params: DEFAULT_PARAMS
  });

  return data;
};

export const fetchTrending = async() => {
  const {data} = await axios.get(`${BASE_URL}/trending`, {
    params: DEFAULT_PARAMS
  });

  return data;
};

export const fetchSearched = async(query) => {
    const {data} = await axios.get(`${BASE_URL}/search`, {
      params: {
        ...DEFAULT_PARAMS,
        q: query
      }
    });
  
  return data;
};

export const fetchDetails = async(id) => {
  const {data} = await axios.get(`${BASE_URL}/${id}`, {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      gif_id: id
    }
  });

  return data;
};

export const fetchRandom = async(tag) => {
  const {data} = await axios.get(`${BASE_URL}/random`, {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      tag: tag
    }
  });

  return data;
};