const express = require('express');
const bodyParser = require('body-Parser');
const app = express();


// middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (Request, Response) => {
    Response.send('hello world');
});

const port = process.env.port || 3000;
app.listen(port,function() {
    console.log(`Server running on port ${port}`)
});



// Prend les variable de SubmissionForm pour les stocker dans node.js
/*app.get('/SubmissionForm.html',(req,res)=>{
    var Appartement = req.body.Appartement;
    var Floor = req.body.Floor;
    var Basements = req.body.Basements;
    var Business = req.body.Business;
    var Parking = req.body.Parking;
    var Cages = req.body.Cages;
    var Companies = req.body.Companies;
    var PeopleFloor = req.body.PeopleFloor;
    var OpenHours = req.body.OpenHours;
    var ResultElevator = req.body.ResultElevator;
// les variables des bouton radio Standard, Premium, Excelium
    var Standard = req.body.Standard;
    var Premium = req.body.Premium;
    var Excelium = req.body.Excelium;

// les variables de prix : Elevator, installation, total
    var PriceElevator = req.body.PriceElevator;
    var Installation = req.body.Installation;
    var Total = req.body.Total;

})

console.log(Appartement)


*/
