import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/todo.js';

const app = express();


app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())
app.use('/todos',todoRoutes);
const CONNECTION_URL= 'mongodb+srv://gaurang21:1@Safegns@2@cluster0.glhio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
                .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
                .catch((e)=> console.log(`Error:${e.message}`));

mongoose.set('useFindAndModify',false);