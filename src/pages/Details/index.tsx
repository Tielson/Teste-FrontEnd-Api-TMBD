import { useParams } from 'react-router-dom'
import { HeaderDetails } from '../../components/HeaderDetails'
import { MainCast } from './components/MainCast'
import { Recommendations } from './components/Recommendations'
import { Video } from './components/Video'
import { Container } from './styles'

export function Details() {
  const params = useParams()

  return (
    <Container>
      <HeaderDetails genreId={params.id} />
      <MainCast genreId={params.id} />
      <Video genreId={params.id} />
      <Recommendations genreId={params.id} />
    </Container>
  )
}
