

const routes = [{
    url:'/products',
    method: 'GET',
    handler: (request, reply)=>{
        reply.send('products');
    }
},
{
    url:'/products/:id',
    method: 'GET',
    handler: (request, reply)=>{
        reply.send('single product');
    }
},
{
    url:'/products',
    method: 'POST',
    handler: (request, reply)=>{
        reply.send('Creating a product');
    }
},
{
    url:'/products/:id',
    method: 'DELETE',
    handler: (request, reply)=>{
        reply.send('Deleting a product');
    }
},
{
    url:'/products/:id',
    method: 'PUT',
    handler: (request, reply)=>{
        reply.send('Updating a product');
    }
},
]

module.exports = routes;