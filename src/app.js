require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
       app.listen(PORT, () => {
              console.log(`Server running on port ${PORT}`);
       });
}

module.exports = app;