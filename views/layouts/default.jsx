const React = require('react')

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Pupparazzi</title>
        <link href="https://fonts.googleapis.com/css?family=Spirax" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        <link rel="stylesheet" href="/main.css"></link>
      </head>
      <body>
        <div className="app">
          <h1 className="title">Pupparazzi</h1>
          <a className="nav" href="/">Home</a>
          {props.children}
        </div>
      </body>
    </html>
  )
}

module.exports = DefaultLayout