//import e inizializzazione della libreria mongodb
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient; 
const uri = ''

/*
router.get('/list/:num', function (req, res, next) {

    console.log(req.params);
    let num = parseInt(req.params.num);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(getListMovies);  

    function getListMovies(err) {
        if (err) console.log("Conessione al db non riuscita");
        else {
            const collection = client.db("sample_mflix").collection("movies");
            collection.find().limit(num).toArray(callBackQuery);
        }
    } 

    function callBackQuery(err, result)  {
        if (err) console.log(err.message); 
        else res.send(result);
        client.close(); 
    }
    
});
*/
module.exports = router;