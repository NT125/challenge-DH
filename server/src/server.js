const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3008;

const applicantsRouter = require('./routes/applicants');
const professionsRouter = require('./routes/professions');

app.use(cors({origin: `http://localhost:3000`}))

app.use('/applicants', applicantsRouter)
app.use('/professions', professionsRouter)


app.listen(PORT, () => {
    console.log(`[server]: running in port: ${PORT}`);
})