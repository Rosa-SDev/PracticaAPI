const express = require('express')
process.loadEnvFile()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Corriendo')
})

