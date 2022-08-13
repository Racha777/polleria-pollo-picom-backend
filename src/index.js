const app=require('./app');
require('./lib/mongoose.lib');

async function main(){
    await app.listen(app.get('port'));
}

main();