const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');
//Third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

//Built-in middleware
app.use(express.static('publik'));

// Application level middleware
app.use((req, res, next)=>{
  console.log('Time: ', Date.now());
  next();
});
  
 //res.sendFile('./index.html', { root: __dirname});
 app.get('/', (req, res) => {
 const mahasiswa =[
  {
    nama : 'Ahmad iyasya',
    email : 'ahiyasya@gmail.com',
  },
  {
    nama : 'Silmi nadira',
    email : 'Silmina@gmail.com',
  },
  {
    nama : 'Silmi iyasya',
    email : 'Silmiiy@gmail.com',
  },
 ];
  res.render('index', {
    nama: 'Ahmad iyasya',
    layout : 'layouts/main-layout', 
    title : 'Halaman Home',
    mahasiswa,
    layout : 'layouts/main-layout'

  });
});

app.get('/about', (req, res) => {
   
  res.render('about',{
    layout : 'layouts/main-layout',
    title : 'Halaman About',
  });
  });

app.get('/contact', (req, res) => {
    
  res.render('contact',{
    layout : 'layouts/main-layout',
    title : 'Halaman Contact',
  });
  });

app.get('/product/:id', (req, res)=>{
    res.send(`Product ID : ${req.params.id} <br> Category  : ${req.query.category}`);
});

app.use((req, res)=>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



