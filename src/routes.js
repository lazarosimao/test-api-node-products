const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');

routes.get('/', (req, res) => {
    // Product.create({
    //     title: "Lázaro Simão",
    //     description: "Testando Testando",
    //     url: "www.lazarosimao.com"
    // });
    res.send('Aqui');
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;