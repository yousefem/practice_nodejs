const express =require('express');
const app=express();
const db=require('./db')

app.listen('3000',()=>{
    console.log('server run on port 3000');
})
