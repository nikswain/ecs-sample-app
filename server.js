const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send(`
    <html>
        <h1>
            ECS Sample on 3010 - Boop
        </h1>
    </html>
`)
})

app.get('/healthcheck', (req, res) => {
    res.status(200)
})

app.listen(3010, () => {
    console.log('Server is up on 3010')
})