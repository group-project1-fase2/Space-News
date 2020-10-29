const express = require("express")
const app = express()
const PORT = 3000
const routes = require('./routes/spaceX');

app.use(express.json())
app.use("/spaceX", routes)

app.listen(PORT, () => console.log(`server berjalan`))