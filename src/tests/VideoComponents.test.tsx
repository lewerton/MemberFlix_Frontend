import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoCarousel from '../components/video/VideoSection';
import VideoCard from '../components/video/VideoCard';
import { Video } from '../models/Video';
import React from 'react';

const mockVideos: Video[] = [
  { id: 1, title: 'Video 1', thumbnail: 'thumb1.jpg', category: { id: '1', title: 'Category 1', domain: 'domain1' }, hls_path: 'path1', views: 100, likes: 10 },
  { id: 2, title: 'Video 2', thumbnail: 'thumb2.jpg', category: { id: '2', title: 'Category 2', domain: 'domain2' }, hls_path: 'path2', views: 200, likes: 20 },
];

describe('VideoCarousel Component', () => {
  test('renders VideoCarousel with title', () => {
    render(<VideoCarousel title="Test Carousel" videos={mockVideos} />);
    expect(screen.getByText('Test Carousel')).toBeInTheDocument();
  });

  test('renders VideoCards inside carousel', () => {
    render(<VideoCarousel title="Test Carousel" videos={mockVideos} />);
    expect(screen.getByText('Video 1')).toBeInTheDocument();
    expect(screen.getByText('Video 2')).toBeInTheDocument();
  });
});

describe('VideoCard Component', () => {
  test('renders VideoCard with correct title and category', () => {
    render(<VideoCard video={mockVideos[0]} />);
    expect(screen.getByText('Video 1')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
  });
});
