const express = require('express')
const dotenv = require('dotenv');
dotenv.config()

const db = require('./src/models/db');
const userRouter = require('./src/routes/userRouter');
const app = express();
const PORT = process.env.PORT || 5000;


db.sequelize.sync()
  .then(() => console.log('Database connected and synced'))
  .catch((err) => console.error('Error syncing database:', err));

  app.get('/', (req, res) => {
    res.status(200).json({ message: "home" })
  })
  app.use('/api/v1', userRouter)
  
  // server
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
  })