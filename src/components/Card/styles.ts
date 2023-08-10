import { styled } from 'styled-components'

export const Container = styled.div`
  width: 11rem;

  img {
    border-radius: 0.25rem;
    border: 1px solid #e7e7e7;
    width: 11rem;
    height: 16.5rem;
  }
  p {
    color: ${({ theme }) => theme.BASE_FILM};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.BASE_DATE};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }

  margin-bottom: 1rem;
`

export const Button = styled.button``
