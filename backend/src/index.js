import '@babel/polyfill';
import server from './server';

async function init(){
	await server.listen(server.get('port') , () => {
		console.log(`server on port ---${server.get('port')}---> `);
	})
}

init();