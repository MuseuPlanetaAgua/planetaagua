import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { CarouselImage } from './mocks';
import { FaAngleLeft } from 'react-icons/fa';
import Translator from '../../../../../../components/i18n/translator';

export default function Carousel() {
  const [handleSlider, setSlider] = useState(1);

  const showDescription = () => {
    switch (handleSlider) {
      case 1:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel1.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel1.description" />
            </p>
          </>
        );

      case 2:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel2.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel2.description" />
            </p>
          </>
        );
      case 3:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel3.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel3.description" />
            </p>
          </>
        );
      case 4:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel4.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel4.description" />
            </p>
          </>
        );
      case 5:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel5.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel5.description" />
            </p>
          </>
        );
      case 6:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel6.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel6.description" />
            </p>
          </>
        );
      case 7:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel7.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel7.description" />
            </p>
          </>
        );
      case 8:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel8.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel8.description" />
            </p>
          </>
        );
      case 9:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel9.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel9.description" />
            </p>
          </>
        );
      case 10:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel10.title" />
            </h1>
            <p>
              <Translator path="SixthSection.Carousel10.description" />
            </p>
          </>
        );
      case 11:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel11.title" />
            </h1>
          </>
        );
      case 12:
        return (
          <>
            <h1>
              <Translator path="SixthSection.Carousel12.title" />
            </h1>
          </>
        );

      default:
        break;
    }
  };

  const nextSlider = () => {
    if (handleSlider !== 10) {
      setSlider(handleSlider + 1);
    } else {
      setSlider(1);
    }
  };

  const prevSlider = () => {
    if (handleSlider !== 1) {
      setSlider(handleSlider - 1);
    } else {
      setSlider(10);
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
        <button
          type="button"
          className="next-button"
          onClick={() => nextSlider()}
        />
        <button
          type="button"
          className="prev-button"
          onClick={() => prevSlider()}
        />

        {CarouselImage.slice(-1 + handleSlider, 2 + handleSlider).map(
          (image) => (
            <> {image.img}</>
          )
        )}
      </div>

      <div className="carousel-controler-mobile">
        <button
          type="button"
          className="previous-button"
          onClick={() => prevSlider()}
        >
          <FaAngleLeft />
        </button>
        <button
          type="button"
          className="next-button"
          onClick={() => nextSlider()}
        >
          <FaAngleLeft />
        </button>
      </div>
      <div className="dots">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((dot) => (
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

      <div className="description">{showDescription()}</div>
    </Container>
  );
}
