import { styled } from 'styled-components'
type isActiveProps = {
  isActive: boolean
}

export const Container = styled.button<isActiveProps>`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.isActive === false ? props.theme.WHITE : props.theme.YELLOW};
  border-radius: 0.25rem;

  color: ${(props) => props.theme.BASE_FILM};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;

  span {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }
`
