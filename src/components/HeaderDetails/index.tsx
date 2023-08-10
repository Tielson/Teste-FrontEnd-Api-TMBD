import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tmdb from '../../assets/tmdb.png'
import { api } from '../../lib/api'
import { Cast } from '../Cast'
import { Container, FistHeader, SecondHeader } from './styeles'

export interface Genres {
  id: string
  name: string
}

interface Dates {
  certification: string
  release_date: string
}

interface HeaderProps {
  genreId: string | undefined
}

interface Genre {
  id: number
  name: string
}

interface DetailsFilmProps {
  original_title: string
  poster_path: string
  release_date: string
  genres: Genre[]
  vote_average: number
  overview: string
}

interface CertificationProps {
  iso_3166_1: string
  release_dates: Dates[]
}

export function HeaderDetails({ genreId }: HeaderProps) {
  const [detailsFilm, setDetailsFilm] = useState<DetailsFilmProps>(
    {} as DetailsFilmProps,
  )
  const [certification, setCertification] = useState<CertificationProps[]>([])
  const navigate = useNavigate()

  const apiKey = '32b5ad73de1d43d1f4abc55da34e9c04'
  const BaseImageUrl = 'https://image.tmdb.org/t/p/'
  const ImagePath = detailsFilm.poster_path
  const ImageSize = 'w400'
  const imageUrl = `${BaseImageUrl}${ImageSize}${ImagePath}`

  function handleStart() {
    navigate('/')
  }

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseData = await api.get(`/3/movie/${genreId}?language=pt-BR`)
        const responseCertification = await api.get(
          `/3/movie/${genreId}/release_dates?api_key=${apiKey}`,
        )
        setDetailsFilm(responseData.data)
        setCertification(responseCertification.data.results)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [genreId])

  return (
    <Container>
      <FistHeader>
        <div className="section">
          <button onClick={handleStart}>
            <img src={Tmdb} alt="" />
          </button>
        </div>
      </FistHeader>
      <SecondHeader>
        <img src={imageUrl} alt="" />
        <div className="titleDetails">
          <h1>
            {detailsFilm?.original_title} (
            {detailsFilm?.release_date?.slice(0, 4)})
          </h1>

          <div className="line">
            <h2>
              {certification.map((data) => {
                if (data.iso_3166_1 === 'BR') {
                  const validReleasesBR = data.release_dates.filter(
                    (release) => release.certification,
                  )

                  if (validReleasesBR.length > 0) {
                    return (
                      <div key={data.iso_3166_1} className="ponto">
                        <p>{validReleasesBR[0].certification} anos</p>
                        <span>•</span>
                      </div>
                    )
                  }
                }

                return null
              })}
              <div className="dataBr">
                {detailsFilm?.release_date}
                {certification.map((data) => {
                  if (data.iso_3166_1 === 'BR') {
                    return (
                      <div key={data.iso_3166_1}>
                        <p> ({data.iso_3166_1}) </p>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              </div>
              <span>•</span>
              <div className="tags-wrapper">
                {detailsFilm?.genres &&
                  detailsFilm?.genres.map((tags, index) => {
                    return (
                      <>
                        <p key={index}> {tags.name} </p>
                        {index !== detailsFilm.genres.length - 1 && (
                          <h6> , </h6>
                        )}
                      </>
                    )
                  })}
              </div>
              <span>•</span> <p>1h 47m</p>
            </h2>
          </div>

          <div className="boxAssessment">
            <div className="assessment">
              <p>{Math.round(detailsFilm.vote_average * 10)}%</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <path
                  d="M30.0623 3.70727C30.0232 2.05087 31.3372 0.660778 32.9893 0.787229C37.8747 1.16117 42.6105 2.72772 46.7732 5.3692C51.7832 8.54828 55.7379 13.1416 58.1372 18.5682C60.5366 23.9949 61.2729 30.0112 60.2531 35.8563C59.2332 41.7015 56.5029 47.1129 52.4076 51.4063C48.3122 55.6998 43.0356 58.6824 37.2451 59.977C31.4546 61.2716 25.4103 60.82 19.8765 58.6794C14.3426 56.5388 9.56779 52.8053 6.15582 47.951C3.32082 43.9176 1.53251 39.2609 0.928428 34.3986C0.724154 32.7544 2.05068 31.3761 3.70708 31.337C5.36347 31.2979 6.71875 32.6146 6.96406 34.2532C7.51418 37.9277 8.91235 41.4387 11.0646 44.5007C13.7941 48.3842 17.614 51.371 22.0411 53.0835C26.4682 54.7959 31.3036 55.1572 35.936 54.1215C40.5684 53.0858 44.7897 50.6998 48.066 47.265C51.3423 43.8303 53.5265 39.5011 54.3424 34.825C55.1583 30.1489 54.5692 25.3359 52.6497 20.9945C50.7302 16.6532 47.5664 12.9786 43.5585 10.4353C40.3983 8.43001 36.8253 7.19909 33.1289 6.823C31.4806 6.65528 30.1014 5.36366 30.0623 3.70727Z"
                  fill="#14FF00"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                >
                  <circle
                    cx="30.6997"
                    cy="30.6998"
                    r="30"
                    fill="white"
                    fillOpacity="0.1"
                  />
                </svg>
              </svg>
            </div>
            <h3>Avaliação dos usuários</h3>
          </div>

          <div className="synopsis">
            <h2>Sinopse</h2>

            <div>
              <h4>{detailsFilm.overview} </h4>
            </div>

            <div>
              <Cast apiKey={apiKey} key={genreId} genreId={genreId} />
            </div>
          </div>
        </div>
      </SecondHeader>
    </Container>
  )
}
