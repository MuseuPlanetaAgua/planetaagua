import React from 'react';

import HeroVideo from '../../../../assets/video/GLOBO-DESKTOP.mp4';

import { ReactComponent as LogoPlaneta } from '../../../../assets/svg/logo-cultura.svg';
import { Container } from './styles';

export default function Hero() {
  return (
    <Container>
      <LogoPlaneta alt="logo-cultura" className="middle-logo-cultura" />

      <video
        loop
        autoPlay
        muted
        src={HeroVideo}
        id="videoHero"
        type="video/mp4"
      />
    </Container>
  );
}
