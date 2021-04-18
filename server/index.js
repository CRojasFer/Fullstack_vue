//Inicializamos las tres 
 const express = require("express");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 
 //inicializamos express
 const app = express();
 
 //Middelware
 
 //inicializamos body-parser y cors en la app
 app.use(bodyParser.json);
 app.use(cors());

//"Importamos" las rutos del file ./api/posts.js
 const posts = require('./routes/api/posts');

 app.use('/api/posts', posts);
 
 // Handle Production

   if(process.env.NODE_ENV === 'production'){

      app.use(express.static(__dirname + '/public')); 


   } 
   //Handel SPA

   app.get(/.*/, (res,req) => {

      res.sendFile(__dirname + '/public/index.html');

   });


 //Creamos una constante para el puerto concreto que quramos usar; 
    const port = process.env.PORT || 5000;

 //Empezamos el server ecuchando en el port especializado.
    app.listen(port, () => 
      //Respuesta de node.
      console.log(`Server started on port ${port}`)
     
    );

