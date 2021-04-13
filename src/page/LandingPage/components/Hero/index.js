import React from 'react';

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
        src="https://youtu.be/BzTExrVVreE"
        id="videoHero"
        type="video/mp4"
      />
    </Container>
  );
}
