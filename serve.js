'use strict';

module.exports.serve = (event, context, callback) => {
  console.log(event)
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
      <html>
        <style>
          h1 { color: #73757d; }
        </style>
        <body>
          <h1>Landing Page</h1>
        </body>
      </html>
    `,
  };

  callback(null, response);
};
