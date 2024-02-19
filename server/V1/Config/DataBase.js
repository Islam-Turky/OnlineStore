const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://iturky06:8OP53UEDXsCJxJpE@cluster0.ohiguq8.mongodb.net/Online-Shop?retryWrites=true&w=majority")
.then(() => { console.log("Connecte to MongooDB Successfully..."); })
.catch((error) => { 
    console.log("Connecte to MongooDB Failure: ");
    console.log(error);
})
