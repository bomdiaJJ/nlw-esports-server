import express, { response } from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;

    return response.json([
    ]) 
})

app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;
    
    return response.json([
    ]) 
})

// localhost:3333/
app.listen(3333)