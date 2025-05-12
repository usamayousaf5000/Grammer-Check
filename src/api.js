import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getJobs = async (filters = {}) => {
  const response = await axios.get(`${API_URL}/jobs`, { params: filters });
  return response.data;
};

export const addJob = async (job) => {
  const response = await axios.post(`${API_URL}/jobs`, job);
  return response.data;
};

export const deleteJob = async (id) => {
  await axios.delete(`${API_URL}/jobs/${id}`);
};

export const runScraper = async () => {
  await axios.post(`${API_URL}/scrape`);
};