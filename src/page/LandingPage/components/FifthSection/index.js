import PublicVideo from '../../../../assets/video/PUBLICO-DESKTOP.m4v';
import React, { forwardRef } from 'react';

import { Container } from './styles';
import Translator from '../../../../components/i18n/translator';

const FifthSection = (props, ref) => {
  return (
    <Container id="publico" {...props} ref={ref}>
      <div className="main-info" data-aos="fade-up-right">
        <div className="left-side">
          <h1>
            <Translator path="FithSection.title" />
          </h1>

          <p>
            <Translator path="FithSection.description" />
            <ol>
              <li>
                <Translator path="FithSection.li1" />
              </li>
              <li>
                <Translator path="FithSection.li2" />
              </li>
              <li>
                <Translator path="FithSection.li3" />
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="right-side">
        <video loop autoPlay muted src={PublicVideo} type="video/m4v" />
      </div>
    </Container>
  );
};

export default forwardRef(FifthSection);
