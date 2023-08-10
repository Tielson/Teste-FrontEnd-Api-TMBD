import { styled } from 'styled-components'

export const Container = styled.div`
  margin: 4rem 0;
  overflow: hidden;

  .section {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${(props) => props.theme.BASE_FILM};
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem;
      letter-spacing: -0.00875rem;

      margin-bottom: 1.5rem;
    }
  }
`
