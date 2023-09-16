const express=require("express");
const mysql=require("mysql2");
var cors = require('cors')

const app=express();
app.use(cors())
let connection = mysql.createConnection({
    host: "bpgumhqgvazuqzn3tmmg-mysql.services.clever-cloud.com",
    user: "uzkehuixmxeaspfg",
    password: "7dI3hNnHUe05ycEgb91d",
    database: "bpgumhqgvazuqzn3tmmg",
  });


  

  app.get ("/Persons", (req,res)=>{

    connection.query("select * from Persons", function (err, result, fields) {
      console.log(err);
      console.log(result);
      console.log(fields);
        res.send(result);
    }

   
  );
  
});

//  app.listen(3000);

 app.post("/Persons/", (req, res) => {
  let obj = req.body;
  connection.query(
    `INSERT INTO Persons (ID, LastName, FirstName )
    VALUES ("${obj.ID}", "${obj.LastName}", "${obj.FirstName}")`,
    function (err, result, fields) {
      //   console.log(result);
      //   app.get("/student", function (req, res) {
      //     res.send(result);
      //   });
    }
  );
  connection.query("select * from Persons", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.listen(process.env.PORT || 3000);
