import React from 'react';

import SecondSectionVideo from '../../../../assets/video/PEIXINHOS-DESKTOP.mv4';

import { Container } from './styles';
import Translator from '../../../../components/i18n/translator';

export default function SecondarySection() {
  return (
    <Container id="conceito">
      <div className="main-info" data-aos="fade-up-right">
        <div className="left-side">
          <h1>
            <Translator path="SecondarySection.title" />
          </h1>
          <p>
            <Translator path="SecondarySection.description" />
          </p>
        </div>
      </div>
      <video
        loop
        autoPlay
        muted
        src={SecondSectionVideo}
        type="video/mv4"
        className="background-animation"
      />
    </Container>
  );
}
