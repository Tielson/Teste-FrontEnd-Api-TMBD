import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8.62rem;
  padding-bottom: 5rem;
  overflow: hidden;
  color: ${(props) => props.theme.BASE_FILM};

  .section {
    margin: auto;
  }

  .box {
    width: 11.9375rem;
    height: 21rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    border-radius: 0.25rem;
    background: var(--neutral-colors-gray-gray-000, #fff);
    box-shadow: 4px 4px 4px 2px rgb(0 0 0 / 35%);
  }

  img {
    width: 10.9375rem;
    height: 13.875rem;
    border-radius: 0.25rem;
  }
`
