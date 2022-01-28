const app = require('./server/server.js');
const db = require('./knex');
const PORT = process.env.PORT || 4000;

(async () => {
  try{
    app.listen(PORT, () => {
      console.log(`Server is listening @ http://localhost:${PORT}`)
    });
  } catch (err) {
    console.error(`App failed to start`, err);
    process.exit(-1);
  }
})



