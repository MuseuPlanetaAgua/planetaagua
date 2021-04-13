import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 80px auto;
  display: none;

  @media screen and (max-width: 960px) {
    display: unset !important;

    .top-right-control-mobile {
      display: flex !important;
    }
  }

  .top-right-control-mobile {
    width: 120px;
    margin: 20px auto;
    display: none;
    justify-content: space-between;

    .top-left-next-button {
      right: 0px;
      svg {
        position: relative;
        transform: rotate(180deg);
      }
    }
  }

  .team-section-mobile {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .next-button-mobile,
  .previous-button-mobile {
    width: 44px;
    height: 44px;
    border: 1px solid var(--SecondaryColor);
    border-radius: 99px;
    background: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    top: 150px;

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

  .previous-button-mobile {
    left: 0px;
  }
  .next-button-mobile {
    right: 0px;
    svg {
      position: relative;
      transform: rotate(180deg);
    }
  }

  .people-card-mobile {
    width: 220px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    margin: 0 10px;
    z-index: 3;
    position: relative;

    .people-pic-mobile {
      width: 220px;
      height: 358px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        height: 100%;
        pointer-events: none;
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
    .about-me-mobile {
      margin-top: 38px;

      h1 {
        font-size: 32px;
        color: var(--SecondaryColor);
      }

      h3 {
        color: var(--PrincipalColor);
        font-size: 16px;
        margin: 20px 0;
        text-transform: uppercase;
      }
    }
  }
`;
