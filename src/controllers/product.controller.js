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
import { errorMonitor } from 'events';

export default class ProductController {  
    getProducts(req, res) {  
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
  getUpdateProductView(req,res,next){
    const {id} = req.body;
    const productfound = ProductModel.getById(id);
    if(productfound){
        res.render('update-prduct',{product:productfound,errorMessage:null});
    }else{
        res.status(401).send('product not found');
    }
  }
}
