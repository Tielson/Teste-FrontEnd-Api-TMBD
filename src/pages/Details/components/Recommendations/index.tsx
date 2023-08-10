import { useEffect, useState } from 'react'
import { Card } from '../../../../components/Card'
import { api } from '../../../../lib/api'
import { FilmsProps } from '../../../Home'
import { Slide } from '../Slide'
import { Container } from './styles'

export function Recommendations({ genreId }: { genreId: string | undefined }) {
  const [recommendations, setRecommendations] = useState<FilmsProps[]>([])

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseCast = await api.get(
          `/3/movie/${genreId}/recommendations?language=pt-BR&page=1`,
        )
        setRecommendations(responseCast.data.results)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [genreId])
  return (
    <Container>
      <div className="section">
        <h1>Recomendações</h1>

        <div>
          <Slide>
            {recommendations.map((film) => (
              <div key={film.id} className="splide__slide">
                <Card
                  key={film?.id}
                  id={film?.id}
                  img={film?.poster_path}
                  title={film?.title}
                  date={film?.release_date}
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Container>
  )
}
