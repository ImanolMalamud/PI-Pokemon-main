//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { typesInDb } = require('./src/controllers/Controllers');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	// llamamos los types de la api y los guardamos en la base de datos
	typesInDb(),

	// Creamos una variable de entorno llamada PORT (le damos valor 3001 localmente).
	// Heroku despues va a usar un valor propio internamente (distinto) para esa variable PORT.
	server.listen(process.env.PORT, () => {
		console.log(`%s listening at ${port}`); // eslint-disable-line no-console
	});
});
