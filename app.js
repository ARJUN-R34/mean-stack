const express=require('express');
const chalk=require('chalk');
const path=require('path');

var app = new express();

var nav=[
      {link:'/index',title:'Home'},
      {link:'/aboutus',title:'About Us'},
      {link:'/categories',title:'Categories'},
      {link:'/contactus',title:'Contact Us'}
    ]

const homeRouter=require('./src/routes/homeRoutes')(nav);
const aboutRouter=require('./src/routes/aboutRoutes')(nav);
const categoryRouter=require('./src/routes/categoryRoutes')(nav);
const contactRouter=require('./src/routes/contactRoutes')(nav);
const laptopRouter=require('./src/routes/laptopRoutes')(nav);
const mobileRouter=require('./src/routes/mobileRoutes')(nav);
const menRouter=require('./src/routes/menRoutes')(nav);
const womenRouter=require('./src/routes/womenRoutes')(nav);

app.use(express.static(path.join(__dirname,"/public")));
app.use('/index',homeRouter)
app.use('/aboutus',aboutRouter)
app.use('/categories',categoryRouter)
app.use('/contactus',contactRouter)
app.use('/laptops',laptopRouter)
app.use('/mobiles',mobileRouter)
app.use('/mens',menRouter)
app.use('/womens',womenRouter)

app.get('/',function(req,res){
  res.render('index',{
    nav
  });
});

app.set('views','./src/views');
app.set('view engine','ejs');

app.listen(4000,function(){
  console.log("Listening on port "+chalk.green('4000'));
});
