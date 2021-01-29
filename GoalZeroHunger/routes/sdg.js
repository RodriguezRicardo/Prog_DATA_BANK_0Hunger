//import e inizializzazione della libreria mongodb
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient; 
const uri = 'mongodb+srv://ricardorodriguez:Rcy_kj0_p@nraboy-sample.bf8zs.mongodb.net/nraboysample?retryWrites=true&w=majority'

//per la collections cereal_yield
router.get('/cereal', function (req, res, next) {

    console.log(req.params);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(getListCereal);  

    function getListCereal(err) {
        if (err) console.log("Conessione al db non riuscita");
        else {
            const collection = client.db("WORLD_DATA_BANK_ZEROHUNGER").collection("cereal_yield");
            collection.find().toArray(callBackQuery);
        }
    } 

    function callBackQuery(err, result)  {
        if (err) console.log(err.message); 
        else res.send(result);
        client.close(); 
    }
    
});

//per la collezione food-security
router.get('/food-security', function (req, res, next) {

    console.log(req.params);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(getListFood);  

    function getListFood(err) {
        if (err) console.log("Conessione al db non riuscita");
        else {
            const collection = client.db("WORLD_DATA_BANK_ZEROHUNGER").collection("food_security");
            collection.find().toArray(callBackQuery);
        }
    } 

    function callBackQuery(err, result)  {
        if (err) console.log(err.message); 
        else res.send(result);
        client.close(); 
    }
    
});

//per la collezione undernourishment
router.get('/undernourishment', function (req, res, next) {

    console.log(req.params);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(getUndernourishment);  

    function getUndernourishment(err) {
        if (err) console.log("Conessione al db non riuscita");
        else {
            const collection = client.db("WORLD_DATA_BANK_ZEROHUNGER").collection("prevalence_of_undernourishment");
            collection.find().toArray(callBackQuery);
        }
    } 

    function callBackQuery(err, result)  {
        if (err) console.log(err.message); 
        else res.send(result);
        client.close(); 
    }
    
});
module.exports = router;