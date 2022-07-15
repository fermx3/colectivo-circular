const express = require("express");
const https = require('https');
const ejs = require('ejs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render('index');
});

app.get('/mision', function (req, res){
  res.render('mision');
});

app.get("/work", function (req, res) {
  //Fetch Last 3 posts from Blog
  const lastPosts = [];
  const url = 'https://public-api.wordpress.com/rest/v1.1/sites/colectivocircular.com::blog/posts/?category=colectivo-circular';
  fetch(url).then(function(response){
    return response.json()
  }).then(function(data){
    data.posts.map((post) => lastPosts.push(post));
    console.log(lastPosts);
  })

  res.render('work');
});

app.get('/blog', function (req, res){
  res.send(__dirname + '/blog/wp-blog-header.php');
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});