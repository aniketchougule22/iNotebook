const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');

app.use(express.json());

app.use('/api/user', require('./routes/user'));
app.use('/api/notes', require('./routes/notes'));


app.listen(process.env.PORT, () =>{
    console.log(`server running on PORT ${process.env.PORT}`);
});