import React,{Component} from 'react'
import ProductActions from '../actions/ProductActions'
import uuid from 'uuid'

export default class ProductForm extends Component{
  constructor(props){
    super(props);
    this._submitForm = this._submitForm.bind(this);

  }
  _submitForm(event){
    event.preventDefault();
    const {prodName,prodPrice} = this.refs;
    let product = {
      name: prodName.value,
      price: parseFloat(prodPrice.value),
      id: uuid()
    }
    console.log(product);
    prodName.value = '';
    prodPrice.value = '';
    ProductActions.create(product);

  }
  render(){
    return (
      <form onSubmit={this._submitForm} className="form-inline">
      <div className="form-group">
        <label htmlFor="productname">Product Name:</label>
        <input type="text" className="form-control" id="prodName" required ref="prodName"/>
      </div>
      <div className="form-group">
        <label htmlFor="productprice">Cost</label>
        <input type="number" className="form-control" id="prodPrice" ref="prodPrice" required min='0' step = '0.01'/>
      </div>
      <button className ="btn btn-success" >Add Product</button>
      </form>
      )
  }
}