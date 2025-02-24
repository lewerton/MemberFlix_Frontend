// Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Video } from '../models/Video';
import React from 'react';

const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Video 1',
    thumbnail: 'http://example.com/thumbnail1.png',
    category: { id: '0', title: 'Continuar reprodução', domain: 'test.com' },
    description: 'Descrição do video 1',
    hls_path: 'http://example.com/video1.m3u8',
    views: 100,
    likes: 10,
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnail: 'http://example.com/thumbnail2.png',
    category: { id: '1', title: 'Ao vivo', domain: 'test.com' },
    description: 'Descrição do video 2',
    hls_path: 'http://example.com/video2.m3u8',
    views: 200,
    likes: 20,
  },
];

describe('Home Page', () => {
  it('deve renderizar o SkeletonLoader quando não houver vídeos', () => {
    render(<Home videos={[]} />);
    const skeleton = screen.getByTestId('skeleton-loader');
    expect(skeleton).toBeInTheDocument();
  });

  it('deve renderizar as seções de vídeos filtradas por categoria quando vídeos são fornecidos', () => {
    render(<Home videos={mockVideos} />);
    // Verifica que para a categoria "Continuar reprodução" e "Ao vivo" existem elementos
    const sectionsContinuar = screen.getAllByText(/Continuar reprodução/i);
    const sectionsAoVivo = screen.getAllByText(/Ao vivo/i);
    expect(sectionsContinuar.length).toBeGreaterThan(0);
    expect(sectionsAoVivo.length).toBeGreaterThan(0);
  });
});
