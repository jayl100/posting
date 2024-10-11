const express = require('express');
const app = express()

app.listen(1111)

const postRouter = require('./postPage');

app.use("/", postRouter)