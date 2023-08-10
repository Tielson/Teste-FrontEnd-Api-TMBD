import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'
import { Slide } from '../Slide'
import { Container } from './styles'

interface CastProps {
  genreId: string | undefined
}

interface MainCastProps {
  id: string
  name: string
  character: string
  profile_path: string
}

export function MainCast({ genreId }: CastProps) {
  const [mainCast, setMainCast] = useState<MainCastProps[]>([])
  console.log(mainCast)

  const apiKey = '32b5ad73de1d43d1f4abc55da34e9c04'
  const BaseImageUrl = 'https://image.tmdb.org/t/p/'
  const ImageSize = 'w400'

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseCast = await api.get(
          `https://api.themoviedb.org/3/movie/${genreId}/credits?api_key=${apiKey}`,
        )
        setMainCast(responseCast.data.cast)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [apiKey, genreId])

  return (
    <Container>
      <div className="section">
        <div>
          <h2>Elenco original</h2>
        </div>
        <div className="aa">
          <Slide>
            {mainCast.slice(0, 10).map((castMember) => (
              <div key={castMember.id} className="splide__slide">
                <div className="box">
                  <img
                    src={`${BaseImageUrl}${ImageSize}${castMember.profile_path}`}
                    alt={castMember.name}
                  />
                  <h3>{castMember.name}</h3>
                  <p>{castMember.character}</p>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Container>
  )
}
