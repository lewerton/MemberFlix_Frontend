import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { fetchVideoById, updateVideoLikes } from '../../services/videoService';
import SkeletonLoader from '../../components/SkeletonLoader';
import { Video } from '../../models/Video';
import HLSPlayer from '../../components/HLSPlayer';
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import {
  Box,
  Typography,
  Button,
  Card,
  Divider,
  Stack
} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

type ReactionType = 'like' | 'dislike' | null;

type VideoDetailProps = {
  video: Video;
};

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  const [likes, setLikes] = useState(video.likes || 0);
  const [reaction, setReaction] = useState<ReactionType>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Chave para armazenar a reação do vídeo no localStorage
  const localStorageKey = `video-${video.id}-reaction`;

  // Ao carregar o componente, busca a reação no localStorage
  useEffect(() => {
    const storedReaction = localStorage.getItem(localStorageKey);
    if (storedReaction === "like" || storedReaction === "dislike") {
      setReaction(storedReaction);
    }
  }, [localStorageKey]);

  const handleReaction = async (newReaction: ReactionType) => {
    // Se já estiver com a mesma reação, não faz nada
    if (reaction === newReaction) return;

    setIsUpdating(true);
    try {
      // Atualiza no backend (supondo que updateVideoLikes aceite o tipo de reação)
      const updatedVideo = await updateVideoLikes(video.id, newReaction);
      setLikes(updatedVideo.likes);
      setReaction(newReaction);
      // Armazena a nova reação no localStorage
      if (newReaction) {
        localStorage.setItem(localStorageKey, newReaction);
      } else {
        localStorage.removeItem(localStorageKey);
      }
    } catch (error) {
      console.error('Error updating reaction:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLike = () => {
    // Se o usuário já deu dislike e agora clica em like, atualiza para "like"
    handleReaction('like');
  };

  const handleDislike = () => {
    // Se o usuário já deu like e agora clica em dislike, atualiza para "dislike"
    handleReaction('dislike');
  };

  if (!video) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '20px', color: 'white' }}>
        <Box sx={{ p: 3, maxWidth: 960, margin: '0 auto' }}>
          {/* Seção do Vídeo */}
          <Card>
            <HLSPlayer url={video.hls_path || ''} />
          </Card>
          {/* Seção do Título e Ações */}
          <Box mt={2}>
            <Typography variant="h5" fontWeight="bold">
              {video.title}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mt={1} flexWrap="wrap">
              <Typography variant="body2">{video.views} visualizações</Typography>
              <Typography variant="body2">{likes} curtidas</Typography>

              {/* Ações */}
              <Stack direction="row" spacing={1}>
                <Button variant="text" startIcon={<PlaylistAddIcon />} sx={{ textTransform: 'none' }}>
                  Adicionar à minha lista
                </Button>
                <Button
                  onClick={handleLike}
                  disabled={isUpdating}
                  variant="text"
                  startIcon={reaction === "like" ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  Gostei
                </Button>
                <Button
                  onClick={handleDislike}
                  disabled={isUpdating}
                  variant="text"
                  startIcon={reaction === "dislike" ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  Não é para mim
                </Button>
                <Button variant="text" startIcon={<ShareOutlinedIcon />} sx={{ textTransform: 'none' }}>
                  Compartilhar
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Seção: Resumo */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Resumo
            </Typography>
            <Typography variant="body1" paragraph>
              Esse primeiro campo Fundamental é importante para deixar seu vídeo hospedado em uma
              plataforma como disponibilidade de vídeo on OTT. Caso tenha adicionado seu vídeo em outra
              plataforma, pode ser que a função &quot;Como fazer upload&quot; não esteja visível, pois refere-se
              apenas ao processo de código embed.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Seção: Como fazer upload */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Como fazer upload
            </Typography>
            <Typography variant="body1" paragraph>
              Para começar a enviar o seu arquivo é preciso acessar a opção Gerenciar vídeos, em seguida
              Clicar vídeo. Para começar o processo de upload, selecione a opção Carregar vídeo. Em
              seguida, selecione o arquivo que deseja enviar.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Seção: Arquivos complementares */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Arquivos complementares
            </Typography>
            <Typography variant="body1" paragraph>
              É possível adicionar arquivos de apoio para a prática ou para esta entrega hospedada em
              uma plataforma.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Seção: Texto */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Texto
            </Typography>
            <Typography variant="body1" paragraph>
              Você pode adicionar links ou arquivos em PDF, DOCX, etc. que sirvam de apoio para o
              conteúdo.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Seção: Áudio */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Áudio
            </Typography>
            <Typography variant="body1" paragraph>
              Também é possível adicionar arquivos de áudio em MP3, por exemplo, caso queira complementar
              a aula com outro formato de conteúdo.
            </Typography>
          </Box>

        </Box>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  try {
    const video = await fetchVideoById(Number(id));
    return { props: { video } };
  } catch (error) {
    console.error('Error fetching video:', error);
    return { notFound: true };
  }
};

export default VideoDetail;
