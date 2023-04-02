const express = require('express');
const cors = require('cors');
const file = require('./controllers/files')
const app = express();
const PORT = process.env.PORT || 4000; 

app.use(cors());
app.use(express.json());

app.get('/api/file', file.getSpells);

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}!`));