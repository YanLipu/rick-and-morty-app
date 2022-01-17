import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
})
