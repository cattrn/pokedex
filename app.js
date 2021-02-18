var express = require('express')
var path = require('path')
const usersRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))



app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('listening on 3000')
})