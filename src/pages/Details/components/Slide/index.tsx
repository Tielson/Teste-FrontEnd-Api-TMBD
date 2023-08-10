import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { ReactNode } from 'react'
import './styles.css'

interface SlideProps {
  children: ReactNode
}

export function Slide({ ...restProps }: SlideProps) {
  const options = {
    perPage: 6,
    perMove: 1,
    breakpoints: {
      1450: { perPage: 4 },
      900: { perPage: 3 },
      600: { perPage: 1 },
    },
  }
  return <Splide options={options} {...restProps}></Splide>
}
