import { GetServerSideProps } from 'next';
import React from 'react';
import { fetchVideos } from '../services/videoService';
import SkeletonLoader from '../components/SkeletonLoader';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import VideoSection from '../components/video/VideoSection';
import { Video } from '../models/Video';

import { Typography, Container, Box, Button } from "@mui/material";
import Carousel from 'react-material-ui-carousel';

type HomeProps = {
  videos: Video[];
};

const titles: string[] = ["Continuar reprodução", "Ao vivo", "Minha lista"];

const Home: React.FC<HomeProps> = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <SkeletonLoader />;
  }

  // Agrupa os vídeos por categoria
  const categories = videos.reduce((acc: Record<string, Video[]>, video) => {
    if (!acc[video.category.id]) {
      acc[video.category.id] = [];
    }
    acc[video.category.id].push(video);
    return acc;
  }, {});

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
        <Container maxWidth="sm" sx={{ mt: 2, mb: 2, left: 0, marginLeft: 0 }}>
          <Carousel>
            <Box sx={{ backgroundColor: "black", padding: 4, borderRadius: 2 }}>
              <Typography variant="h4">
                TikTok como inovação na era digital com Rafael Kiso
              </Typography>
              <Typography variant="body1">
                Os principais desafios na priorização de novos produtos.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "white", color: "black" }}
              >
                Reproduzir agora
              </Button>
            </Box>
          </Carousel>
        </Container>

        <div style={{ padding: '20px' }}>
          {Object.keys(categories).map((category) => {
            const filteredVideos = videos.filter(
              video => video.category.id === category
            );
            return (
              <Box key={category} sx={{ backgroundColor: "#121212", p: 3, color: "white", paddingLeft: '10px' }}>
                <VideoSection
                  title={titles[parseInt(category)] ?? "Outros"}
                  videos={filteredVideos}
                />
              </Box>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const videos = await fetchVideos();
    return { props: { videos } };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return { props: { videos: [] } };
  }
};

export default Home;
