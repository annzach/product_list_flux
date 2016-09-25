//we have to always import React for JSX 
import React,{Component} from 'react';
import ProductForm from './ProductForm';
import ProductContainer from './ProductContainer'

export default class Layout extends Component {
  render(){
    return(
       <div className="container">
       <h1 className="text-center">ProductList</h1>
       <ProductForm/>
       <ProductContainer/>
       </div>
      )
  }
}