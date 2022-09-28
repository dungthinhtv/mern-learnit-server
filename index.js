const express = require('express');
const port = 3010;

const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./routes/auth');
// const postRouter = require('./routes/post')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://braddang:dangbrad@mern-learnit.ykgykqz.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

connectDB();

const app = express();

app.use('/', authRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
