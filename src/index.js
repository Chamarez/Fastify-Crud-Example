const fastify = require('fastify')({
    logger:true
});
const productRoutes = require('./routes/products.routes')

require('./utils/mongoose');

fastify.get("/",(request, replay)=>{
    replay.send({hello:"World"});
})

productRoutes.forEach(route => {
    fastify.route(route)

})



const start = async () =>{
    await fastify.listen(3000);
    fastify.log.info(`Server linstening on ${fastify.server.address().port}`)
}

start();