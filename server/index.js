import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import ExpressError from './utilities/ExpressError.js';
import postRoutes from './routes/posts.js';

const app = express();

const dbUrl =
  'mongodb+srv://memory-book:7tBjes5k3gOqSgeJ@cluster0.naavu.mongodb.net/memoryBook?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
  })
  .catch((error) => {
    console.log('Database Connection Error');
    console.log(error.message);
  });

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('*', (req, res, next) => {
  next(new ExpressError('Page not found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'Something went wrong';
  }
  console.log(err.stack);
  res.status(statusCode).send(err.message);
});
