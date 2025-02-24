import axios from 'axios';
import { Video } from '../models/Video';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api';

export const fetchVideos = async (): Promise<Video[]> => {
  const response = await axios.get(`${API_URL}/videos`);
  return response.data.data;
};

export const fetchVideoById = async (id: number): Promise<Video> => {
  const response = await axios.get(`${API_URL}/videos/${id}`);
  return response.data;
};

export const updateVideoLikes = async (id: number, acao: string | null): Promise<Video> => {
  const response = axios.patch(`${API_URL}/videos/${id}`, { like: acao === "like" ? true : false })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  return response;
};
