//this is basic method to validate a function in the backend syatme there is anthoer way for the backend to valiadte the data i.e
//  const validation = (req,res,next) => {
//     const {name,price,imageUrl} =req.body;
//     let errors = [];
//     if(!name || name.trim() == ''){
//         errors.push("Name is required")
//     }
//     if(!price || parseFloat(price) < 1){
//         errors.push("Price must be positive");
//     }
//     try {
//         const validUrl = new URL(imageUrl);
//     } catch (err) {
//         errors.push("URL is invalid")
//     }

//     if(errors.length > 0){
//         return res.render('new-product',{errorMessage : errors[0]})
//     }
//     next();
// }


//another way to validate the data is by using experess validator
import {
    body,
    validationResult,
  } from 'express-validator';
  
  const validation = async (
    req,
    res,
    next
  ) => {
    console.log(req.body);
    // 1. Setup rules for validation.
    const rules = [
      body('name')
        .notEmpty()
        .withMessage('Name is required'),
      body('price')
        .isFloat({ gt: 0 })
        .withMessage(
          'Price should be a positive value'
        ),
      body('imageUrl')
        .isURL()
        .withMessage('Invalid url'),
    ];
  
    // 2. run those rules.
    await Promise.all(
      rules.map((rule) => rule.run(req))
    );
  
    // 3. check if there are any errors after running the rules.
    var validationErrors = validationResult(req);
    console.log(validationErrors);
    // 4. if errros, return the error message
    if (!validationErrors.isEmpty()) {
      return res.render('new-product', {
        errorMessage:
          validationErrors.array()[0].msg,
      });
    }
    next();
  };
  
  export default validation;
  