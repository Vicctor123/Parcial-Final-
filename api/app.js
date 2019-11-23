const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');
require('dotenv/config');

//midlwrs
app.use(cors());
app.use(bodyParser.json());

//importando routes 
const postsRoute = require('./routes/posts');

app.use('./posts', postsRoute);

//routes
app.get('/', (req,res) => {
    res.send('sup')
});
//----- 
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true }, ()=>{
    console.log('conectado')
});

app.listen(3000);


