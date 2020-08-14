const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./mysql/db-config');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');


//get halaman daftar_karyawan
app.get('/daftar_karyawan', (req, res) => {

  var sql = `SELECT * FROM daftar_karyawan;`

  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('daftar_karyawan', { results: results });
    console.log(results);
  });
});

//get halaman pertama
app.get('/', (req, res) => {

  var sql = `SELECT * FROM daftar_karyawan`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('daftar_karyawan', { results: results });
    console.log(results);
  });
});

//post add video
app.post("/add_employee", function(req, res) {
  let data = { name: req.body.name, thumbnail: req.body.thumbnail, description: req.body.description, division: req.body.division, age: req.body.age, gender: req.body.gender};
  let sql = "INSERT INTO daftar_karyawan SET?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/');
  });
});

//route untuk update data
app.post('/update_employee', (req, res) => {
  let sql = `UPDATE daftar_karyawan SET name='${req.body.name}',thumbnail='${req.body.thumbnail}', description='${req.body.description}', division='${req.body.division}', age=${req.body.age}, gender='${req.body.gender}' WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/');
  });
});

//route untuk delete data
app.post('/delete', (req, res) => {
  let sql = `DELETE FROM daftar_karyawan WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect('/');
  });
});

//get detail ninja
app.get("/ninja/:id", function(req, res) {
  var video_id = parseInt(req.params.id);
  let sql = 'SELECT * FROM daftar_karyawan WHERE id =?';
  let query = db.query(sql, video_id, (error, results) => {
    if (error) {
      throw error;
    } else {
        res.render("detail", { results: results });
        console.log(results);
    }
  });
});
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
