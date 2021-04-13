import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 80px auto;
  position: relative;

  @media screen and (max-width: 960px) {
    margin: 50px 0;

    .title-section {
      .section-title {
        font-size: 39px !important;
      }
    }

    .slide-section {
      display: none !important;
    }

    .top-right {
      display: none !important;
    }
  }

  .top-right {
    width: 120px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;

    button {
      width: 44px;
      height: 44px;
      border: 1px solid var(--SecondaryColor);
      border-radius: 99px;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      svg {
        transition: 0.3s;
        fill: var(--SecondaryColor);
      }

      &:hover {
        background: var(--SecondaryColor);
        svg {
          fill: white;
        }
      }
    }

    .top-left-next-button {
      right: 0px;
      svg {
        position: relative;
        transform: rotate(180deg);
      }
    }
  }

  .team-section {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .people-card {
    width: 270px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    margin: 0 10px;
    z-index: 3;

    &:nth-child(1) {
      width: 200px !important;
      opacity: 0.12;
      position: absolute;
      top: 60px;

      left: 0;
      pointer-events: none;
      z-index: 1;

      .people-pic {
        width: 200px;
        height: 260px;
      }

      .about-me {
        display: none;
      }
    }
    &:nth-last-child(1) {
      width: 200px !important;
      opacity: 0.12;
      position: absolute;
      top: 60px;

      right: 0;
      pointer-events: none;
      z-index: 1;

      .people-pic {
        width: 200px;
        height: 260px;
      }

      .about-me {
        display: none;
      }
    }

    .people-pic {
      width: 270px;
      height: 338px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;

      img {
        height: 100%;
        pointer-events: none;
        position: absolute;
        z-index: 2;

        &:nth-child(2) {
          height: 200%;
          filter: blur(8px);
          z-index: 1;
        }
      }

      .linkedin {
        width: 40px;
        height: 40px;
        background: var(--SecondaryColor);
        border-radius: 99px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        position: absolute;
        top: 10px;
        right: 10px;
        transition: 0.3s;

        &:hover {
          background: var(--PrincipalColor);
        }

        svg {
          fill: white;
        }
      }
    }
    .about-me {
      margin-top: 38px;

      h1 {
        font-size: 26px;
        height: 36px;
        color: var(--SecondaryColor);
      }

      h3 {
        height: 46px;
        color: var(--PrincipalColor);
        font-size: 16px;
        margin-top: 10px;
        text-transform: uppercase;
      }
    }
  }
`;
