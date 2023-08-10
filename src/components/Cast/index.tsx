import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Container } from './styles'

interface CastProps {
  genreId: string | undefined
  apiKey: string | undefined
}

interface Cast {
  job: string
  name: string
}

interface CombinedJobsProps {
  jobs: string[]
  name: string
}

export function Cast({ genreId, apiKey }: CastProps) {
  const [cast, setCast] = useState<Cast[]>([])
  const [combinedJobs, setCombinedJobs] = useState<CombinedJobsProps[]>([])
  console.log(combinedJobs)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const desiredJobs = [
    'Characters',
    'Story',
    'Director',
    'Screenplay',
    'Writer',
  ]

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseCast = await api.get(
          `https://api.themoviedb.org/3/movie/${genreId}/credits?api_key=${apiKey}`,
        )
        setCast(responseCast.data.crew)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchMovieData()
  }, [apiKey, genreId])

  useEffect(() => {
    const desiredCrewMembers = cast.filter((member: Cast) =>
      desiredJobs.includes(member.job),
    )
    const uniqueNames = [
      ...new Set(desiredCrewMembers.map((member) => member.name)),
    ]
    const combinedJobsData = desiredCrewMembers.reduce((acc, member) => {
      if (uniqueNames.includes(member.name)) {
        uniqueNames.splice(uniqueNames.indexOf(member.name), 1)
        const existingMember = acc.find(
          (item: CombinedJobsProps) => item.name === member.name,
        )
        if (existingMember) {
          existingMember?.jobs.push(member.job)
        } else {
          acc.push({ name: member.name, jobs: [member.job] })
        }
      }
      return acc
    }, [] as CombinedJobsProps[])
    setCombinedJobs(combinedJobsData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cast])

  return (
    <Container>
      {combinedJobs.slice(0, 5).map((member) => (
        <div key={member.name}>
          <h2>{member.name}</h2>
          <p> {member.jobs.join(',')}</p>
        </div>
      ))}
    </Container>
  )
}
