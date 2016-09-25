import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events';
import Storage from '../Storage';

let _products = Storage.read('products')||[]; 

class ProductStore extends EventEmitter{
  constructor(){
    super();
      AppDispatcher.register(action=>{
        console.log("every time an action is dipatched --msg from store",action);

      switch(action.type){
        case 'PRODUCT_CREATE':
        console.log("payload",action.payload)
        //let {product} = action.product; //check?????? same as below code.
        let product =action.payload.product;
         _products.push(product);
        console.log("store",product);
        this.emit('CHANGE');
        break;

        case 'PRODUCT_EDIT': 
         let prod = action.payload.product;
         let index = _products.findIndex(element=>{
           console.log('prod.id:', prod.id)
           console.log('element.id:', element.id)
           return prod.id === element.id
         })
         console.log('index:', index)
         _products[index] = prod;

         console.log("PRODUCT_EDIT":_products)
         this.emit('CHANGE');
         break;

        case 'PRODUCT_DELETE':
         console.log("delete_id", action.id);
         let newArr = _products.filter(element=> element.id != action.id);
         console.log(newArr);
         _products = newArr;
         this.emit('CHANGE');
         break;

      }
      });
      this.on('CHANGE',()=>{
        console.log("store_prod", _products)
        Storage.write('products',_products);

      })
    }
  
  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }
  getAll(){
    return _products;
  }

}

export default new ProductStore();