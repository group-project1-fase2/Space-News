require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const routes = require('./routes/spaceX');
const nasaRouter = require('./routes/nasa');

const authRouter = require('./routes/auth')

const errorHandlers = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/spaceX", routes)
app.use('/auth', authRouter);
app.use('/nasa', nasaRouter);
app.use(errorHandlers);



app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
})