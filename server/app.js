require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const authentication = require('./middlewares/authentication');
const authorization = require('./middlewares/authorization');

const authRouter = require('./routes/auth')
const rocketRouter = require('./routes/rocket')
const userRocketRouter = require('./routes/userRocket')

const errorHandlers = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/auth', authRouter);

app.use(authentication);
app.use('/rocket', rocketRouter);
app.use('/user-rocket', userRocketRouter);
app.use(errorHandlers);


app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
})