import axios from "axios";

const API_BASE = "https://java-backend-sample.onrender.com/items"; //  , "http://localhost:8080/items" 

export const addItem = async (item) => {
  return await axios.post(API_BASE, item);
};

export const getItem = async (id) => {
  return await axios.get(`${API_BASE}/${id}`);
};