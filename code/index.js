Bun.serve({
    port: 8080,
    fetch(request) {
        const { Client } = require('pg')
        const client = new Client({
            user: 'user',
            host: 'db',
            database: 'mydb',
            password: 'secret',
            port: 5432,
        })
        client.connect(function(err) {
        if (err) throw err;
            console.log("Connected!");
        });
      return new Response("Hello from Bun!");
    },
  });
