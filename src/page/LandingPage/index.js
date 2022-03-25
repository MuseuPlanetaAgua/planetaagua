import React, { useRef, useState, useLayoutEffect } from 'react';

import { MainContainer, Container } from './styles';
import { ReactComponent as TopWave } from '../../assets/svg/top-wave-animation.svg';
import { ReactComponent as MiddleWave } from '../../assets/svg/middle-wave-animation.svg';
import { ReactComponent as BottomWave } from '../../assets/svg/bottom-wave-animation.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from './components/Hero';
import FirstSection from './components/FirstSection';
import SecondarySection from './components/SecondarySection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import { FaInstagram } from 'react-icons/fa';
import Translator from '../../components/i18n/translator';

export default function Home() {
  const [sectionsPosition, setSectionsPosition] = useState({});

  const thirdSectionRef = useRef(null);
  const fithSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!!thirdSectionRef || !!sixthSectionRef || !!fithSectionRef) {
      const getPositions = {
        thrdSection: thirdSectionRef?.current?.offsetTop,
        fithSectionRef: fithSectionRef?.current?.offsetTop,
        sixthSection: sixthSectionRef?.current?.offsetTop,
      };

      setSectionsPosition(getPositions);
    }
  }, [thirdSectionRef, fithSectionRef, sixthSectionRef]);

  return (
    <MainContainer>
      <Header sectionPositions={sectionsPosition} />
      <div className="test2" />
      <Hero />
      <FirstSection />
      <SecondarySection />
      <Container ref={thirdSectionRef}>
        <ThirdSection />
      </Container>
      <FourthSection />
      <FifthSection ref={fithSectionRef} />
      <SixthSection ref={sixthSectionRef} />
      <div className="division-animation">
        <TopWave />
        <MiddleWave />
        <BottomWave />
      </div>
      <SeventhSection />

      <section className="instagram-call">
        <h2>
          <Translator path="instagramCall.title" />
        </h2>

        <a
          href="https://instagram.com/museuplanetaagua?igshid=12qqmilwe1m02"
          target="_blank"
          rel="noreferrer"
        >
          <span className="insta-call">
            <Translator path="instagramCall.instagramButton" />
          </span>
          <div>
            <FaInstagram />
          </div>

          <span className="instagram-tag"> @museuplanetaagua</span>

          <span className="hover-animation" />
        </a>
      </section>

      <div className="division-animation bottom-animation">
        <TopWave />
        <MiddleWave />
        <BottomWave />
      </div>

      <Footer />
    </MainContainer>
  );
}
