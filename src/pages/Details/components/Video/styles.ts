import { styled } from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  .section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 1.5rem;
  }
  .section .react-player {
    width: 60vw !important;
  }
  h1 {
    color: ${(props) => props.theme.BASE_FILM};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.00875rem;
  }
`
