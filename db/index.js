const _conn = require('./_conn');

const sync = () => _conn.sync({force: true});


const User = _conn.define('user', {
	name: _conn.Sequelize.STRING
});

const Product = _conn.define('product', {
	name: _conn.Sequelize.STRING
});

const seed = () => {
	return sync()
	.then(()=>{
		Promise.all([
			User.create({name: 'Moe'}),
			User.create({name: 'Curly'}),
			User.create({name: 'Larry'}),
			User.create({name: 'Prof'}),
			Product.create({name: "Butterfinger"}),
			Product.create({name: "Mars Bar"}),
			Product.create({name: "M & M\'s"}),
			Product.create({name: "Reese\'s"}),
		])
		.catch(e=>console.log(e));

	})
}

 

module.exports = {
	sync,
	seed,
	models: {
		User,
		Product
	}
}