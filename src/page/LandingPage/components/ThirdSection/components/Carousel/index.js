import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Slide1 from '../../../../../../assets/img/1.jpf';
import Slide2 from '../../../../../../assets/img/2.jpf';
import Slide3 from '../../../../../../assets/img/3.jpf';
import Slide4 from '../../../../../../assets/img/4.jpf';
import Slide5 from '../../../../../../assets/img/5.jpf';
import Slide6 from '../../../../../../assets/img/6.jpf';
import Slide7 from '../../../../../../assets/img/7.jpf';
import Wave from '../../../../../../assets/img/slider-wave.png';

export default function Carousel() {
  const [handleSlider, setSlider] = useState(1);

  const nextSlider = () => {
    if (handleSlider !== 7) {
      setSlider(handleSlider + 1);
    } else {
      setSlider(1);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlider();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [handleSlider]);

  return (
    <Container propSlider={handleSlider}>
      <div className="carousel-image">
        <img src={Wave} alt="wave" className="wave-slide" />

        <img
          src={Slide1}
          alt="slide-img"
          style={handleSlider === 1 ? { opacity: '1' } : null}
        />
        <img
          src={Slide2}
          alt="slide-img"
          style={handleSlider === 2 ? { opacity: '1' } : null}
        />
        <img
          src={Slide3}
          alt="slide-img"
          style={handleSlider === 3 ? { opacity: '1' } : null}
        />
        <img
          src={Slide4}
          alt="slide-img"
          style={handleSlider === 4 ? { opacity: '1' } : null}
        />
        <img
          src={Slide5}
          alt="slide-img"
          style={handleSlider === 5 ? { opacity: '1' } : null}
        />
        <img
          src={Slide6}
          alt="slide-img"
          style={handleSlider === 6 ? { opacity: '1' } : null}
        />
        <img
          src={Slide7}
          alt="slide-img"
          style={handleSlider === 7 ? { opacity: '1' } : null}
        />
      </div>
      <div className="dots">
        {[1, 2, 3, 4, 5, 6, 7].map((dot) => (
          <button
            type="button"
            key={dot}
            className={`${dot}-dot`}
            onClick={() => setSlider(dot)}
          >
            <div />
          </button>
        ))}
      </div>
    </Container>
  );
}
