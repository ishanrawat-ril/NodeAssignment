const express=require('express')

const app=express()
const port=process.env.PORT || 3000
console.log(__dirname)

path=require('path')
hbs=require('hbs')
const publicDirectoryPath=path.join(__dirname,'./public')
app.set('views', path.join(__dirname, './templates/views'));
hbs.registerPartials(path.join(__dirname,'./templates/partials'))
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
res.render('index',{
    title:'weather app',
    name:'ishan rawat'
})
})

app.get('/absentDays', function (req, res) {
    res.send('9')
  })
 
  app.listen(port,()=>{
    console.log('server is up for port'+port) })

    app.get('/absentDetails', function (req, res) {
        res.send("Following is the absent days details <br>1/6/2020<br> 2/6/2021<br> 3/6/2021<br> 4/6/2021 ")
      })
      app.get('/leaveBalance', function (req, res) {
        res.send(" CL/Contingency Leave - 6 - 31/12/2021 <br>Optional Holiday - 3 - 31/12/2021 <br>Special Privilege Leave - 10 - 31/12/2021")
      })
      app.get('/holidayCalander', function (req, res) {
        res.send(' 15th August / Sunday - Independence Day<br>10th September / Friday - Ganesh Chaturthi<br>2nd October / Saturday - Gandhi Jayanti')
      })