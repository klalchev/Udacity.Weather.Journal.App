// Setup empty JS object to act as endpoint for all routes
projectData = {}; // can not be cost because it is being reassigned each time we fetch a new zip code object

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies*/
const bodyParser = require('body-parser');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/all', getData)

function getData(req, res){
    res.send(projectData)
    console.log(projectData)
}

// POST Route

app.post('/addWeather', addWeather);

function addWeather(req, res){

    newEntry = {
        city: req.body.city,
        date: req.body.date,
        temp: req.body.temp,
        description: req.body.description, // when you add a new element to the server, you have to rerun the server to show the new element
        fav: req.body.fav
    }

projectData = newEntry; // projectData can not be of type const, because we are updating it each time a new zip is fetched. projectDate will be reassigned the value of newEntry each time and hence it will only store the last entry, whereas an array with a push method would store alll entries. Since the object stores the last entry, it is light weight- does not occupy memory!
res.send(projectData)
console.log(projectData)
}