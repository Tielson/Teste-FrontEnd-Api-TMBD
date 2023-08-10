import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
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

  @media (max-width: 700px) {
    .section {
      justify-content: center;
      width: 100vw;
      img {
        margin-left: 0rem;
      }
    }
  }
`
export const SecondHeader = styled.div`
  background: ${(props) => props.theme.PURPLE_DARK};
  .section {
    width: 100%;
    padding: 5.31rem 2rem 5.25rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin: auto;

    > h1 {
      max-width: 49rem;
      color: '#000000';
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: Roboto;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;

      margin-bottom: 2.5rem;
    }
  }

  .genresDiv {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;

      margin-bottom: 1rem;
    }

    .organizationButtons {
      display: flex;
      gap: 0.75rem;
      max-width: 65rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 700px) {
    padding: 0;
  }
  @media (max-width: 700px) {
    .section h1 {
      text-align: left;
    }
    .genresDiv {
      align-items: flex-start;

      .organizationButtons {
        justify-content: flex-start;
      }
    }
  }

  @media (max-width: 620px) {
    .section h1 {
    }
  }
`
