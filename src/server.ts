import express from 'express'

const app = express()


// www.minhaapi.com/ads
app.get('/ads', (request, response) => {
    // console.log(request) - doideira
    // console.log('Acessou Ads!')

    // return response.send('Acessou Ads!') responde pro usuário
    
    return response.json([ //responde um json pro usuário
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' },
        { id: 5, name: 'Anuncio 5' },
    ]) 
})

// localhost:3333/ads
app.listen(3333)