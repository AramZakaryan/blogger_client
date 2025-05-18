// src/index.ts

import {config} from 'dotenv'
import {app} from './app'

config()

const port = process.env.PORT || 4004

const startApp = async () => {
  app.listen(port,  () => {
    console.log(`listening on port ${port}`)
  })
}

void startApp()
