 //Inicializamos los "Drivers" de mongoDB y express
 const express = require('express');
 const mongodb = require('mongodb');

 //Iniciamos el router
 const router = express.Router();
 
 //Get Post.
 //Metodo para pillar los posts.
 router.get('/', async (res,req) => {

     const posts = await loadPostsCollection();
     res.send(await posts.find({}).toArray());

 });


 //Add Post

 router.post('/', async (req,res) => {

    const posts = await loadPostsCollection();
    await posts.insertOne({

       text: req.body.text,
       createdAt: new Date()

    });
    res.status(201).send();
 });



 //Delete Post

 router.delete('/:id', async (req,res) => {

    const posts = await loadPostsCollection();
    await posts.deleteOne({

       _id: new mongodb.ObjectID(req.params.id)


    });
    res.status(202).send();
 });

 async function loadPostsCollection(){

    const client = await mongodb.MongoClient.connect('mongodb+srv://lite-dex:#firemonbitesdiabase8@cluster0.sjklt.mongodb.net/Fullstack-Vue-Node&Express-Try?retryWrites=true&w=majority',{ 
       
         useNewUrlParser: true
    });  
    return client.db('Fullstack-Vue-Node&Express-Try').collection('posts');
    
 }

 module.exports = router;