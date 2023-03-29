const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use(cors());

app.use('/api/user', require('./routes/user'));
app.use('/api/notes', require('./routes/notes'));


// app.listen(process.env.PORT, () =>{
//     console.log(`server running on PORT ${process.env.PORT}`);
// });
const port = 3001;

app.listen(port, () =>{
    console.log(`server running on PORT ${port}`);
});