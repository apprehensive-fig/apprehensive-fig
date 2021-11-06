const express = require('express');
const path = require('path');
var nodemailer = require('nodemailer');

let initial_path = path.join(__dirname, "public");

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/cv', (req, res) => {
    res.sendFile(path.join(initial_path, "cv.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(initial_path, "contact.html"));
})

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, 'public')));

app.listen("3000", () => {
    console.log('listening...');
})