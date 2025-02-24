import React from 'react';
import { useEffect, useRef } from 'react';
declare module 'hls.js';

type HLSPlayerProps = {
  url: string;
};

const HLSPlayer: React.FC<HLSPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Se o navegador suportar HLS nativamente (como no Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    } else {
      // Caso contrário, carregar hls.js dinamicamente para o navegador que não suporta nativamente
      import('hls.js').then((HlsModule) => {
        const Hls = HlsModule.default;
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(url);
          hls.attachMedia(video);
        } else {
          console.error('HLS não é suportado nesse navegador.');
        }
      });
    }
  }, [url]);

  return <video ref={videoRef} controls width="100%" />;
};

export default HLSPlayer;
