import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmI1YWQ3M2RlMWQ0M2QxZjRhYmM1NWRhMzRlOWMwNCIsInN1YiI6IjYzZDhmNjQ0MjJkZjJlMDBiMjBhOTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ADtl6jD78OX7BQbGmjzsRaoNnVXlrVIu67rHG9xW2U',
  },
})
