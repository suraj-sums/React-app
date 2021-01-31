require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: process.env.REACT_APP_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Add headers
app.use(cors(corsOptions));
app.options('*', cors());
app.use(express.json({ extended: false, limit: '50mb', parameterLimit: 50000 })); // Init Middleware

app.get('/', (req, res) => res.send('API Operational'));

// Define Routes
app.use('/api/facebook', require('./routes/fbdownloader'));
app.use('/api/email', require('./routes/email'));

app.listen(PORT, () => console.log(`Server listening at PORT: ${PORT}`));
module.exports = app;
