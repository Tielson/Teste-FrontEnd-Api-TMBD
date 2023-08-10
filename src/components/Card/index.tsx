import { useNavigate } from 'react-router-dom'
import { Button, Container } from './styles'

interface CardProps {
  img: string
  id: string
  title: string
  date: string
}

export function Card({ img, title, id, date }: CardProps) {
  const BaseImageUrl = 'https://image.tmdb.org/t/p/'
  const ImagePath = img
  const ImageSize = 'w200'
  const imageUrl = `${BaseImageUrl}${ImageSize}${ImagePath}`
  const navigate = useNavigate()

  function handleDirect() {
    navigate(`/details/${id}`)
    window.location.reload()
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Button onClick={handleDirect}>
        <img src={imageUrl} alt="" />
      </Button>
      <p>{title}</p>
      <span>{date}</span>
    </Container>
  )
}
