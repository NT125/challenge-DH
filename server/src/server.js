const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

const applicantsRouter = require('./routes/applicants');
const professionsRouter = require('./routes/professions');

app.use(cors({origin: "http://localhost:5173"}))

app.use('/api/applicants', applicantsRouter)
app.use('/api/professions', professionsRouter)


app.listen(port, () => { 
    console.log(`[server]: running in port: ${port}`);
})