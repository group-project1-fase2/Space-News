require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

const authRouter = require('./routes/auth')

const errorHandlers = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/auth', authRouter);
app.use(errorHandlers);


app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
})