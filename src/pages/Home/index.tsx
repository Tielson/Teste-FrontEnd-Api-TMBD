import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { HeaderHome } from '../../components/HeaderHome'
import { api } from '../../lib/api'
import { Container, SectionMovies } from './styles'

export interface FilmsProps {
  id: string
  poster_path: string
  title: string
  release_date: string
}

export function Home() {
  const [films, setFilms] = useState<FilmsProps[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  function functionGenres(genreId: string) {
    setSelectedGenres((prevState) => {
      if (prevState.includes(genreId)) {
        return prevState.filter((id) => id !== genreId)
      } else {
        return [...prevState, genreId]
      }
    })
  }

  const handleNextPage = (sum: number) => {
    if (sum === 0) {
      return
    }
    if (sum) {
      return setCurrentPage(sum)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  useEffect(() => {
    const fetchMovieData = async (page: number) => {
      try {
        let url = `/3/discover/movie?api_key=YOUR_API_KEY&language=pt-BR&page=${page}`

        if (selectedGenres.length > 0) {
          const genreIds = selectedGenres.join(',')
          url += `&with_genres=${genreIds}`
        }

        const response = await api.get(url)
        const filteredFilms = response.data.results.filter(
          (film: FilmsProps) => film.poster_path,
        )

        setFilms(filteredFilms)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData(currentPage)
  }, [currentPage, selectedGenres])

  useEffect(() => {
    handleNextPage(1)
  }, [selectedGenres])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <Container>
      <HeaderHome functionGenres={functionGenres} />
      <SectionMovies>
        <div className="section">
          {films?.map((film) => (
            <Card
              key={film?.id}
              id={film?.id}
              img={film?.poster_path}
              title={film?.title}
              date={film?.release_date}
            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            {currentPage > 1 ? <CaretLeft size={16} weight="bold" /> : null}
          </button>
          <button onClick={() => handleNextPage(0)}>{currentPage}</button>

          {currentPage < 499 && (
            <button onClick={() => handleNextPage(currentPage + 1)}>
              {currentPage + 1}
            </button>
          )}

          {currentPage + 1 < 500 && (
            <button onClick={() => handleNextPage(currentPage + 2)}>
              {currentPage + 2}
            </button>
          )}

          {currentPage + 2 < 500 && (
            <button onClick={() => handleNextPage(currentPage + 3)}>
              {currentPage + 3}
            </button>
          )}

          {currentPage < 500 ? (
            <button onClick={() => handleNextPage(currentPage + 1)}>
              {currentPage < 500 ? (
                <CaretRight size={16} weight="bold" />
              ) : null}
            </button>
          ) : null}
          {currentPage < 500 && selectedGenres.length === 0 ? (
            <button onClick={() => handleNextPage(500)}>Última</button>
          ) : null}
        </div>
      </SectionMovies>
    </Container>
  )
}
