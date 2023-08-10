import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'
import { Container } from './styles'

import ReactPlayer from 'react-player'

export function Video({ genreId }: { genreId: string | undefined }) {
  const [video, setVideo] = useState('')

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseCast = await api.get(
          `https://api.themoviedb.org/3/movie/${genreId}/videos?language=pt-BR`,
        )
        setVideo(responseCast.data.results[0].key)
      } catch (error) {
        setVideo('"')
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [genreId])

  return (
    <Container>
      <div className="section">
        <h1>Trailer</h1>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          controls={true}
          height="31.875rem"
          className="react-player"
        />
      </div>
    </Container>
  )
}
