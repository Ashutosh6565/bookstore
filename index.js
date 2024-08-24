// import express from 'express'
// import controllerr from './src/controllers/product.controller.js';
// import ejsLayouts from 'express-ejs-layouts';
// import path from 'path';

// const server = express();

// // setup view engine settings
// server.set("view engine", "ejs");
// // path of our views
// server.set("views", path.join(path.resolve(),"src",'views')); 

// server.use(ejsLayouts);

// // create an instance of ProductController
// // const productController = new controller(); 
// server.get('/', (productController.getProducts));

// server.use(express.static('src/views'));

// server.listen(3400);
// console.log('Server is listening on port 3400');

import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

// Setup view engine settings
server.set("view engine", "ejs");
// Path of our views
server.set("views", path.join(path.resolve(), "src", 'views')); 

server.use(ejsLayouts);
server.use(express.urlencoded({extended:true}))
// Create an instance of ProductController
const productController = new ProductController(); 
server.get('/', productController.getProducts.bind(productController));  // Binding the method
server.get('/new',productController.getnewForm);
server.post('/',productController.addNewProduct);

// Serve static files from 'src/views'
server.use(express.static('src/views'));

server.listen(3400, () => {
  console.log('Server is listening on port 3400');
});
