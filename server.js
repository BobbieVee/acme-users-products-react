const express = require('express');	
const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
	res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/api/users', (req, res, next)=>{
	db.models.User.findAll()
	.then((users) =>{
		res.send(users)
	} )
	.catch(next);
});

app.get('/api/products', (req, res, next)=>{
	db.models.Product.findAll()
	.then((products) =>{
		res.send(products)
	} )
	.catch(next);
}); 

app.post('/api/products', (req, res, next)=>{
	db.models.Product.create(req.body)
	.then((product)=>{
		res.send(product)	
	})
	.catch(next);
})

app.delete('/api/products/:id',(req, res, next)=>{
	db.models.Product.destroy({where: {id: req.params.id}})
	.then((product)=>{
		res.sendStatus(200);
	})
	.catch(next);
});

db.seed()
.then(()=>{
	console.log("Synced");
})
.catch(e => console.log(e));

app.listen(port, ()=> {
		console.log(`Intently listening on port ${port}`)	
	});