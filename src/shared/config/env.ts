const APP_NAME = process.env.API_NAME ? process.env.API_NAME as string : ''
const HOSTNAME = process.env.HOSTNAME ? process.env.HOSTNAME as string : 'http://localhost'
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333

export const Env = {
  APP_NAME,
  HOSTNAME,
  PORT
}