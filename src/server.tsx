import React, { Suspense } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.module'

import Html from './Html'
import App from './App'

const app = new Hono()
app.use('/static/*', serveStatic())

app.get('/', async (c) => {
  const stream = await ReactDOMServer.renderToReadableStream(
    <Html>
      <App />
    </Html>
  )
  c.header('Content-Type', 'text/html; charset=utf-8')
  c.header('X-Content-Type-Options', 'nosniff')
  return c.body(stream)
})

export default app
