const express = require('express');	
const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;
const path = require('path');

app.use('/', (req, res, next)=>{
	res.send('hello world!')
});

db.seed()
.then(()=>{
	console.log("Synced");
	app.listen(port, ()=> {
		console.log(`Intently listening on port ${port}`)	
	})
})
.catch(e => console.log(e));