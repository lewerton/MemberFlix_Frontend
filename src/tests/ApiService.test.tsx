import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchVideos, fetchVideoById, updateVideoLikes } from '../services/videoService';

const mock = new MockAdapter(axios);
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api';

describe('Video API Service', () => {
  afterEach(() => {
    mock.reset();
  });

  test('fetchVideos should return a list of videos', async () => {
    const mockData = {
      data: [
        { id: 1, title: 'Video 1', thumbnail: 'thumb1.jpg', category: { id: '1', title: 'Category 1', domain: 'domain1' }, hls_path: 'path1', views: 100, likes: 10 },
        { id: 2, title: 'Video 2', thumbnail: 'thumb2.jpg', category: { id: '2', title: 'Category 2', domain: 'domain2' }, hls_path: 'path2', views: 200, likes: 20 },
      ]
    };
    
    mock.onGet(`${API_URL}/videos`).reply(200, mockData);
    
    const videos = await fetchVideos();
    expect(videos).toEqual(mockData.data);
  });

  test('fetchVideoById should return a single video', async () => {
    const mockData = { id: 1, title: 'Video 1', thumbnail: 'thumb1.jpg', category: { id: '1', title: 'Category 1', domain: 'domain1' }, hls_path: 'path1', views: 100, likes: 10 };
    
    mock.onGet(`${API_URL}/videos/1`).reply(200, mockData);
    
    const video = await fetchVideoById(1);
    expect(video).toEqual(mockData);
  });

  test('updateVideoLikes should update likes and return updated video', async () => {
    const mockData = { id: 1, title: 'Video 1', thumbnail: 'thumb1.jpg', category: { id: '1', title: 'Category 1', domain: 'domain1' }, hls_path: 'path1', views: 100, likes: 11 };
    
    mock.onPatch(`${API_URL}/videos/1`).reply(200, mockData);
    
    const updatedVideo = await updateVideoLikes(1, 'like');
    expect(updatedVideo).toEqual(mockData);
  });
});
