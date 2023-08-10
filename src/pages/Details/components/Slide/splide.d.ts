declare module '@splidejs/react-splide' {
  import { FC } from 'react'

  export interface SplideProps {
    options: object
  }

  export const Splide: FC<SplideProps>
  export const SplideSlide: FC<SplideProps>
}
