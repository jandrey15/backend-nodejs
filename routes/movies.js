const express = require('express')
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi (app) {
  const router = express.Router()

  app.use('/api/movies', router)

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock)

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  router.get('/:movieId', async function (req, res, next) {
    try {
      const movie = await Promise.resolve(moviesMock[0])

      res.status(200).json({
        data: movie,
        message: 'movie retrieved'
      })
    } catch (err) {
      next(err)
    }
  })

  router.post('/', async function (req, res, next) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(201).json({
        data: createdMovieId,
        message: 'movies created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put('/:movieid', async function (req, res, next) {
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: updateMovieId,
        message: 'movies update'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/:moviewId', async function (req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id)

      res.status(200).json({
        data: deletedMovieId,
        message: 'movies deleted'
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = moviesApi
