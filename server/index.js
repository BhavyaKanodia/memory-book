import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

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