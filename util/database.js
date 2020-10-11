/*******************************************
* WE ARE NOT USING THIS SINCE WE HAVE OUR
* OWN DATABSE NOW
**********************************************/

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
	MongoClient.connect(
	'mongodb+srv://DatabaseUser:Kpme1cUVhMn10GmO@cluster0.me8xf.mongodb.net/<dbname>?retryWrites=true&w=majority'
)
	.then(result => {
		console.log('Connected!');
		callback(result);
	})
	.catch(err => {
		console.log(err);
	});
}

module.exports = mongoConnect;