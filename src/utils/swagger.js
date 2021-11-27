exports.options = {
    routePrefix:'/documentation',
    exposeRoute:true,
    swagger:{
        info:{
            title:'NodeJS Fastify MongoDB API',
            description:'Building a blazing fast REST API with node.js, Fastify and MongoDB',
            version:'1'
        },
        externalDocs:{
            url:'http://swagger.io/',
            description:'Find more infor here'
        }
    },
    host:'localhost:3000',
    schemas:["http"],
    consumes:['application/json'],
    produces:['application/json'],
};