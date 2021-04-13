import React from 'react';

import StraubVideo from '../../../../assets/video/Museu Planeta Água _ Straub Design.m4v';

import { Container } from './styles';

export default function FirstSection() {
  return (
    <Container>
      <video
        controls
        mute
        src={StraubVideo}
        type="video/mp4"
        data-aos="zoom-in"
      />
    </Container>
  );
}
