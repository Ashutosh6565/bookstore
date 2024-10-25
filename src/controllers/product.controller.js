// // import path from 'path'
// // import ProductModel  from '../models/product.model.js'

// // export default class controllerr{
// //     getProduct(req,res){
// //         let products = ProductModel.get(); 
// //         console.log(products)
// //         // return res.sendFile(path.join(path.resolve(),'src','views','products.html'))

// //         res.render("products",{products:products});
// //     }
// // }


// // src/controllers/product.controller.js
// import path from 'path';
// import ProductModel from '../models/product.model.js';
// import { errorMonitor } from 'events';

// export default class ProductController {  
//     getProducts(req, res) {  
//         let products = ProductModel.get();
//         console.log(products);
//         res.render("products", { products: products });
//     }

    
//     getnewForm(req,res){
//         res.render('new-product', {errorMessage: null});
//     }


//     addNewProduct(req,res, next){
      
//         // console.log(req.body);
//         ProductModel.add(req.body)
//         let products = ProductModel.get();
//         res.render('products', {products});
//     }





    
//   getUpdateProductView(req,res,next){
//     // const {id} = req.body;
//     const {id} = req.params;
//     console.log(id)
//     const productfound = ProductModel.getById(id);
//     if(productfound){
//         res.render('update-product',{product:productfound,errorMessage:null});
//     }else{
//         res.status(401).send('product not found');
//     }
//   }
//   updateProduct(req,res){
//     // console.log(req.body);
//     ProductModel.update(req.body)
//     let products = ProductModel.get();
//     res.render('products', {products});
//   }
//   deleteProduct(req,res){
//     const id = req.params.id;
//     if(!productfound){
//         res.status(401).send('product not found');
//     }
//     ProductModel.delete(id);
//     let products = ProductModel.get();
//     res.render('products', {products});

//   }
// }
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {  
    getProducts(req, res) {  
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
    }

    getnewForm(req, res) {
        res.render('new-product', { errorMessage: null });
    }

    addNewProduct(req, res, next) {
        ProductModel.add(req.body);
        let products = ProductModel.get();
        res.render('products', { products });
    }

    getUpdateProductView(req, res, next) {
        const { id } = req.params;
        const productfound = ProductModel.getById(id);
        if (productfound) {
            res.render('update-product', { product: productfound, errorMessage: null });
        } else {
            res.status(404).send('Product not found');
        }
    }

    updateProduct(req, res) {
        ProductModel.update(req.body);
        let products = ProductModel.get();
        res.render('products', { products });
    }

    deleteProduct(req, res) {
        const id = req.params.id; // Get the product ID from the URL
        const productfound = ProductModel.getById(id); // Check if the product exists

        if (!productfound) {
            return res.status(404).send('Product not found'); // Return if not found
        }

        ProductModel.delete(id); // Delete the product
        let products = ProductModel.get(); // Get the updated product list
        res.render('products', { products }); // Render the updated product list
    }
}
