// VideoCard.tsx
import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Video } from "../../models/Video";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link
      href={`/videos/${video.id}`}
      sx={{
        textDecoration: "none", // Remove o sublinhado do link
        color: "inherit", // Faz o link herdar a cor do elemento pai
        display: "block", // Garante que o link ocupe toda a área (opcional)
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${video.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          aspectRatio: "16/9", // Mantém a proporção da imagem
          display: "flex",
          alignItems: "end",
          p: 1,
          color: "white",
          borderRadius: 2,
        }}
      >
      </Box>
      <Typography variant="body2" sx={{ color: "#b0b0b0" }}>{video.category.title}</Typography>
      <Typography variant="body1">{video.title}</Typography>
    </Link>
  );
};

export default VideoCard;
