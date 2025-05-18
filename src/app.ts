import express, {Response} from 'express'
import cors from 'cors'
import {config} from 'dotenv'
// import path from 'node:path'

export const app = express()

app.use(express.json())
app.use(cors())

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

config()

const version = process.env.VERSION

app.get('/', (_, res: Response) => {
    res.status(200).json({client_version: version})
})
//
// app.get('/views', (_, res) => {
//     res.render('index', {})
// })
