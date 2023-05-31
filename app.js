import express from 'express'
import config from 'config'
import { engine } from 'express-handlebars'
import { Configuration, OpenAIApi } from 'openai'

const PORT = 3000

const configuration = new Configuration({
  apiKey: config.get('OPENAI_KEY')
})
const openai = new OpenAIApi(configuration)

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.render('index')
})

app.post('/', async (req, res) => {
  const { prompt, size, number } = req.body
  try {
    const response = await openai.createImage({
      prompt,
      size,
      n: Number(number)
    })
    res.render('index', {
      images: response.data.data
    })
  } catch (err) {
    res.render('index', {
      error: err.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`App started at ${PORT} PORT...`)
})
