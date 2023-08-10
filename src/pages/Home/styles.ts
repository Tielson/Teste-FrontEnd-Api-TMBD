import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const SectionMovies = styled.main`
  padding: 1.81rem 0rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .section {
    max-width: 1220px;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pagination {
    margin-top: 3rem;
    color: ${(props) => props.theme.PURPLE_LIGHT};
    display: flex;
    gap: 1rem;

    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }
`
