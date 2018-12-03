import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers' //badrequesterror
import setupDb from './db'
import GameController from './games/controller'

import * as Koa from 'koa'
import {Server} from 'http'

const app = new Koa()
const server = new Server(app.callback())
const port = process.env.PORT || 4000

useKoaServer(app, {
  cors: true,
  controllers: [ GameController ],
  },
)
setupDb()
  .then(_ => {
    server.listen(port)
    console.log(`Listening on port ${port}`)
  })
  .catch(err => console.error(err))
