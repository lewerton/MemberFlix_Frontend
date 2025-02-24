import React from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme, useMediaQuery, Box, Grid, Typography } from "@mui/material";
import VideoCard from "./VideoCard"; // ajuste o caminho conforme sua estrutura
import { Video } from "../../models/Video"; // ajuste o caminho conforme sua estrutura

// Função utilitária para dividir o array em grupos (chunks)
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const VideoCarousel: React.FC<{ title: string, videos: Video[] }> = ({ title, videos }) => {
  const theme = useTheme();

  // Define quantos itens serão exibidos por slide com base nos breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // 960px - 1280px
  const isLg = useMediaQuery(theme.breakpoints.up("lg")); // >=1280px

  let slidesPerView = 1;
  if (isLg) {
    slidesPerView = 4;
  } else if (isMd) {
    slidesPerView = 3;
  } else if (isSm) {
    slidesPerView = 2;
  } else if (isXs) {
    slidesPerView = 1;
  }

  // Divide os vídeos em grupos (chunks) de acordo com slidesPerView
  const videoChunks = chunkArray(videos, slidesPerView);

  return (
    <>
    <Typography variant="h6" color="white" sx={{ paddingLeft: '17px' }} mb={2}>
      {title}
    </Typography>
    <Carousel
      navButtonsAlwaysVisible={true}
      indicators={false}
      animation="slide"
      interval={50000}
      swipe={true}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          borderRadius: 0,
          marginTop: "-3rem",
          marginLeft: "15px",
          marginRight: "0px",
          opacity: 0.3,
          zIndex: 1,
          color: "black",
        },
      }}
    >
        {videoChunks.map((chunk, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              {chunk.map((video, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <VideoCard video={video} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel></>
  );
};

export default VideoCarousel;
