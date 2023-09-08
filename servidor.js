import chalk from 'chalk'
import http from 'http'

const HOST = 'localhost'
const PORT = 8000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    name: 'David',
    message: 'Chalk 5 is ESM, setting type to module, changing require for import.'
  }))
})

server.listen(PORT, HOST, () => {
  console.log(chalk.green(`Server running at http://${HOST}:${PORT}`))
})
