// import path from 'path'
// import ProductModel  from '../models/product.model.js'

// export default class controllerr{
//     getProduct(req,res){
//         let products = ProductModel.get(); 
//         console.log(products)
//         // return res.sendFile(path.join(path.resolve(),'src','views','products.html'))

//         res.render("products",{products:products});
//     }
// }


// src/controllers/product.controller.js
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {  // Renamed the class
    getProducts(req, res) {  // Corrected the method name to match usage in index.js
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
    }
    getnewForm(req,res){
        res.render('new-product', {errorMessage: null});
    }
    addNewProduct(req,res, next){
      
        // console.log(req.body);
        ProductModel.add(req.body)
        let products = ProductModel.get();
        res.render('products', {products});
    }
}
