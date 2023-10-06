// // Packages
// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const { DB } = require('./db')
// const app = express()

// // Middleware
// app.use(cors())
// app.use(bodyParser.json())

// // Database
// async function connectToDB() {
//   try {
//     await mongoose.connect(DB)
//     console.log('Connected to MongoDB')
//   } catch (err) {
//     console.log(err)
//   }
// }

// // Models
// const Ratings = mongoose.model('ratings', {
//   score: {
//     type: Number,
//     required: true,
//   },
// })

// // Routes
// app.get('/ratings', async (req, res) => {
//   try {
//     let rating = await Ratings.findOne()
//     res.send(rating)
//   } catch (err) {
//     res.status(300).send(err)
//   }
// })

// app.post('/ratings', async (req, res) => {
//   try {
//     if (
//       req.body.score == 1 ||
//       req.body.score == 2 ||
//       req.body.score == 3 ||
//       req.body.score == 4 ||
//       req.body.score == 5
//     ) {
//       let rating = await Ratings.create(req.body)
//       res.send(rating)
//     } else {
//       throw 'Score must be 1 to 5'
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(300).send(error)
//   }
// })

// // Server
// app.listen(4000, () => {
//   console.log('Ready at http://localhost:4000')
//   connectToDB()
// })