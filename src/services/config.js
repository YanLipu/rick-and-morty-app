import axios from 'axios'
const API_KEY = 'AIzaSyDqoR37u51tObMAAAUdze2d7poeuKw6b84'

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
