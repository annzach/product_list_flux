import React, {Component} from 'react'
import ProductTable from './ProductTable'
import ProductStore from '../stores/ProductStore'

//A smart component as it changes the state.
export default class ProductContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: ProductStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ProductStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    ProductStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      products:ProductStore.getAll()
    })
  }

  render(){
    const {products}= this.state;
    console.log("product in product container",products);
    return (
    <ProductTable products={products} />
      )
  }
}