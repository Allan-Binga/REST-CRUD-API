import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './Routes/users.js'

const app = express()
const PORT = 5500

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {

    res.send('Hello from Allan')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))