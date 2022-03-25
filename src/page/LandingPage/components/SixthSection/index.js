import React from 'react';

import { Container } from './styles';

import Carousel from './components/Carousel';
import Translator from '../../../../components/i18n/translator';

function SixthSection(props, ref) {
  return (
    <Container id="temas" ref={ref} {...props}>
      <h1 className="section-title" data-aos="fade-up-right">
        <Translator path="SixthSection.title" />
      </h1>
      <div className="main-info" data-aos="zoom-in-up">
        <Carousel />
      </div>
    </Container>
  );
}

export default React.forwardRef(SixthSection);
