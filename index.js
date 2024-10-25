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






















// import express from 'express';
// import ProductController from './src/controllers/product.controller.js';
// import ejsLayouts from 'express-ejs-layouts';
// import path from 'path';
// import validation from './src/middleware/validation.middleware.js'

// const server = express();

// // Setup view engine settings
// server.set("view engine", "ejs");
// // Path of our views
// server.set("views", path.join(path.resolve(), "src", 'views')); 

// server.use(ejsLayouts);
// server.use(express.urlencoded({extended:true}))
// // Create an instance of ProductController
// const productController = new ProductController(); 
// server.get('/', productController.getProducts.bind(productController));  // Binding the method
// server.get('/new',productController.getnewForm);
// server.post('/', validation,productController.addNewProduct);

// // Serve static files from 'src/views'
// server.use(express.static('src/views'));

// server.listen(3400, () => {
//   console.log('Server is listening on port 3400');
// });



// Import the Express module to create a server and handle HTTP requests and responses
import express from 'express';  

// Import the ProductController which contains methods to handle product-related actions (e.g., viewing, adding products)
import ProductController from './src/controllers/product.controller.js';

// Import express-ejs-layouts for managing layouts when using EJS (Embedded JavaScript templates)
import ejsLayouts from 'express-ejs-layouts';

// Import the 'path' module to work with file and directory paths
import path from 'path'; 

// Import validation middleware to handle request validation for adding new products
import validation from './src/middleware/validation.middleware.js';

// Create an instance of the Express server
const server = express();
server.use(express.static('public'))

// Configure the view engine to use EJS for rendering templates
server.set("view engine", "ejs");

// Set the directory where the views (templates) are located using 'path.resolve' to get an absolute path
server.set("views", path.join(path.resolve(), "src", 'views'));

// Use ejsLayouts middleware to enable layout support for EJS templates
server.use(ejsLayouts);

// Middleware to parse URL-encoded bodies (form submissions) with the extended option allowing for rich objects and arrays
server.use(express.urlencoded({extended:true}));

// Create an instance of the ProductController class to handle product-related actions
const productController = new ProductController(); 

// Route to handle GET requests to the root URL ('/'), binding the 'getProducts' method of the ProductController to display products
server.get('/', productController.getProducts.bind(productController));  

// Route to handle GET requests for '/new', which serves the form for adding a new product
server.get('/new', productController.getnewForm);

server.get('/update-product/:id',productController.getUpdateProductView)
// Route to handle POST requests to the root URL ('/'), using 'validation' middleware to validate the form input, 
// then invoking the 'addNewProduct' method to add a new product
server.post('/', validation, productController.addNewProduct);
server.get('/delete-product/:id',productController.deleteProduct);

server.post('/update-product',productController.updateProduct);
// Middleware to serve static files (CSS, JavaScript, images, etc.) from the 'src/views' directory
server.use(express.static('src/views'));

// Start the server on port 3400, and log a message when the server is up and running
server.listen(3400, () => {
  console.log('Server is listening on port 8000');
});
