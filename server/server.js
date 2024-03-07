// Call Express Api.
const express = require('express')
const app = express();

let visitor = 0;
function increment(req, res, next) {
    if(req){
        visitor++;
    }
}
app.get('/', increment, function(req, res) {
    if(req){
        res.write(`<h1>${visitor}</h1>`);
    }
})
app.listen(3000, function () {
	console.log("Express Started on Port 3000");
});
