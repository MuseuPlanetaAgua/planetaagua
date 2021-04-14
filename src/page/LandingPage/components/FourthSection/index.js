import React from 'react';

import StraubVideo from '../../../../assets/video/Museu Planeta Água _ Straub Design.mv4';

import { Container } from './styles';

export default function FirstSection() {
  return (
    <Container>
      <video
        controls
        mute
        src={StraubVideo}
        type="video/mv4"
        data-aos="zoom-in"
      />
    </Container>
  );
}
