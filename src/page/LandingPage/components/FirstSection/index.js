import React from 'react';

import Copel3D from '../../../../assets/img/3DCopel.webp';
import Copel3DFront from '../../../../assets/img/3DCopelFront.png';

import { Container } from './styles';
import Translator from '../../../../components/i18n/translator';

export default function FirstSection() {
  return (
    <Container>
      <div className="main-info" data-aos="fade-up-right">
        <h1 id="museu">
          <Translator path="firstSection.title" />
        </h1>

        <p>
          <Translator path="firstSection.description" />
        </p>
      </div>

      <div className="first-section-background">
        <img src={Copel3DFront} alt="backrgound-copel" />
        <img src={Copel3D} alt="backrgound-copel" />
      </div>
    </Container>
  );
}
