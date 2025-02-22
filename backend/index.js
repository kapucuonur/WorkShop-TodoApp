// 'use strict';

// const express = require('express');
// const app = express();


// //* Required modules
// require('dotenv').config()
// const PORT = process.env.PORT || 8000

// require('express-async-errors')

// //* Configurations
// require('./src/configs/dbConnection')()

// //* Middlewares
// app.use(express.json())

// const cors = require('cors')
// app.use(cors({origin:'http://localhost:3000'}))


// app.all('/', (req, res) => {
//     res.send({
//         error: false,
//         message: 'Welcome to the backend of the application'
//     })
// })

// app.use('/todo',require('./src/router/todo'))


// app.use(require('./src/middlewares/errorHandler'))

// app.listen(PORT, () => console.log('listening at http://127.0.0.1:' + PORT))

'use strict';

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// CORS sadece development ortamında açık
const cors = require('cors');
if (process.env.NODE_ENV === 'development') {
    app.use(cors());
}

// Database Connection
require('./src/configs/dbConnection')();

// Routes
app.use('/api/todo', require('./src/router/todo'));

// Error Handler Middleware
app.use(require('./src/middlewares/errorHandler'));

// **Frontend'i Serve Et**
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// **Sunucuyu Başlat**
app.listen(PORT, () => console.log(`✅ Server running on http://127.0.0.1:${PORT}`));

