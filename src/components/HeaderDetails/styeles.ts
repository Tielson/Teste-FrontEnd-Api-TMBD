import { styled } from 'styled-components'

export const Container = styled.div`
  .section {
    display: flex;
    margin: 0 auto;
  }
`
export const FistHeader = styled.div`
  height: 3.5rem;
  background: ${(props) => props.theme.PURPLE_LIGHT};

  display: flex;
  align-items: center;
  img {
    height: 1.5rem;
  }

  @media (max-width: 900px) {
    .section {
      justify-content: center;
      img {
        margin-left: 0rem;
      }
    }
  }
`
export const SecondHeader = styled.div`
  background: ${(props) => props.theme.PURPLE_DARK};

  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;

  img {
    width: 23.9375rem;
    height: 35.875rem;
    flex-shrink: 0;

    position: relative;
    top: 4.5rem;
    right: 10rem;

    border-radius: 0.5rem;
    background:
      url(<path-to-image>),
      lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .section {
    padding: 5.31rem 2rem 5.25rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  .titleDetails {
    padding: 1rem;
    max-width: 43.5rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.375rem;
      letter-spacing: -0.01rem;
    }

    .line {
      display: flex;
      align-items: center;
      flex-direction: row;

      p {
        white-space: nowrap;
      }

      h2 {
        flex-wrap: wrap;
        align-items: center;
        display: flex;
        gap: 0.5rem;

        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;

        .dataBr {
          display: flex;
          align-items: center;
          white-space: nowrap;
          gap: 0.5rem;
        }

        .tags-wrapper {
          display: flex;

          h6 {
            padding: 0 0.3rem 0 0.1rem;
          }
        }
      }
      .ponto {
        display: flex;
        gap: 0.5rem;
      }
    }
    .boxAssessment {
      display: flex;
      align-items: center;
      gap: 0.73rem;

      .assessment {
        height: 8.5rem;

        p {
          position: relative;
          top: 3rem;
          left: 1rem;

          color: ${(props) => props.theme.GREEN};
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: 2.375rem; /* 237.5% */
          letter-spacing: -0.005rem;
        }
      }

      h3 {
        width: 6.375rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
      }
    }
    .synopsis {
      max-width: 43.5rem;
      gap: 0.5rem;
      h4 {
        color: var(--neutral-colors-gray-gray-300, #ddd);
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        letter-spacing: -0.005rem;
        margin-bottom: 1.5rem;
      }
    }
  }
  @media (max-width: 1450px) {
    .titleDetails {
      max-width: 35.5rem;
    }
    img {
      right: 3rem;
      top: 5rem;
    }
    .titleDetails .boxAssessment .assessment p {
      left: 1.1rem;
      top: 3.2rem;
    }
  }

  @media (max-width: 1200px) {
    .titleDetails .boxAssessment .assessment p {
      left: 1.1rem;
      top: 3.2rem;
    }

    img {
      right: 0rem;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;

    align-items: center;
    padding-top: 2.13rem;

    img {
      position: inherit;
      width: 30vw;
      height: 40vw;
    }

    h2 {
      span {
        display: none;
      }

      .tags-wrapper {
        h6 {
          padding-right: 0.3rem;
        }
      }
    }
    .titleDetails .line h2 {
      flex-direction: column;
      align-items: flex-start;
    }

    .dataBr {
      display: flex;
      gap: 0.3rem;
    }
    .titleDetails .boxAssessment {
      gap: 0;
    }

    .titleDetails .boxAssessment .assessment {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;

      height: 5.75rem;

      svg {
        height: 3.75rem;
        width: 3.75rem;
      }

      p {
        left: -44.7px;
        top: 0;
      }
    }
  }

  @media (max-width: 600px) {
    img {
      width: 11.625rem;
      height: 17.4375rem;
    }

    .titleDetails .line h2 .tags-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
`
