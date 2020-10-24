const express = require('express');
const app = express();
const connectDb = require('./config/db');
app.use(express.json({ extended: false }));

connectDb()

app.use('/make-post', require('./routes/create'));
app.use('/', require('./routes/posts'));
app.use('/update-post', require('./routes/update'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`);})