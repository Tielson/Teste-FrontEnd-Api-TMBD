import { useEffect, useState } from 'react'
import Tmdb from '../../assets/tmdb.png'
import { api } from '../../lib/api'
import { ButtonHeader } from '../ButtonHeader'
import { Container, FistHeader, SecondHeader } from './styeles'

export interface GenresProps {
  id: string
  name: string
}

interface HeaderProps {
  functionGenres: (genreId: string) => void
}

export function HeaderHome({ functionGenres }: HeaderProps) {
  const [genres, setGenres] = useState<GenresProps[]>([])

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await api.get(`/3/genre/movie/list?language=pt`)
        setGenres(response.data.genres)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [])

  return (
    <Container>
      <FistHeader>
        <div className="section">
          <img src={Tmdb} alt="" />
        </div>
      </FistHeader>
      <SecondHeader>
        <div className="section">
          <h1>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h1>
          <div className="genresDiv">
            <p>FILTRE POR:</p>
            <div className="organizationButtons">
              {genres &&
                genres.map((genre) => (
                  <ButtonHeader
                    key={genre.id}
                    name={genre.name}
                    functionGenres={functionGenres}
                    genreId={genre.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </SecondHeader>
    </Container>
  )
}
