import express, { Express, NextFunction, Request, Response } from 'express'
import { routes } from './routes/routes'
import cors from 'cors'
import { log } from "./middleware/log.middleware"
import { errorHandling } from './middleware/error-handling.middleware'

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(log)
app.use(errorHandling)

//configuração das rotas
app.use(routes)

export { app }