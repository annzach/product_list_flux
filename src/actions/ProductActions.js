import AppDispatcher from  '../AppDispatcher'
const ProductActions = {
  create(product) {
    AppDispatcher.dispatch({
      type:"PRODUCT_CREATE",
      payload:{
        product:product // {product}
        
      }
    })
 },
 save(product){
  console.log('product in action:', product)
    AppDispatcher.dispatch({
      type:"PRODUCT_EDIT",
      payload:{
        product:product // {product}
      }
    })
  },
  delete(id){
      console.log('product in action:', id)
    AppDispatcher.dispatch({
      type:"PRODUCT_DELETE",
      id:id
    })
  },
  }


export default ProductActions;