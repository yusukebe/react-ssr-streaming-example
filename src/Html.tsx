import React from 'react'

const Html = (props) => {
  return (
    <html>
      <head>
        <title>React Streaming SSR</title>
      </head>
      <body>
        <div id='app'>{props.children}</div>
        <script src='/static/client.js'></script>
      </body>
    </html>
  )
}

export default Html
