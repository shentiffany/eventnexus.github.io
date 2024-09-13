const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes); 


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/teacher', express.static(path.join(__dirname, '../client/teacher')));
app.use('/student', express.static(path.join(__dirname, '../client/student')));
app.use('/administrator', express.static(path.join(__dirname, '../client/administrator')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.use(express.static('../client')); // serve static files from the client directory

app.use('/client', express.static('../client'))




