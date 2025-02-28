import axios from 'axios';

export const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`
  }
})

export const _openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
    'OpenAI-Beta': 'assistants=v2'
  },
})

