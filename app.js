var createError = require('http-errors');
var express = require('express');
// var cors = require('cors');//引入跨域资源共享
var app = express();
var hostName = '127.0.0.1';//设置主机名
var port = 8080;//设置端口
// const router = require('./routes/users.js')
const {getUsetList,register} = require('./mysql/Interface/user.js')

app.get('/user',(req, res)=>{
  getUsetList().then((result)=>{
    res.send(result)
  })
})
app.get('/register',(req, res)=>{
  register().then((result)=>{
    res.send('注册成功')
  })
})
app.listen(port,hostName,function(){
  console.log('server')
})