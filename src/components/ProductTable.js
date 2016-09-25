import React, {Component} from 'react'
import Numeral from 'numeral';
import ProductActions from '../actions/ProductActions'
export default class ProductTable extends Component{
  constructor(props){
    super(props);
      this.state=({
        editId:null
      })
    this._startEdit = this._startEdit.bind(this);
    this._stopEdit = this._stopEdit.bind(this);
    this._saveEdit = this._saveEdit.bind(this);
  }
  _startEdit(editId){
    this.setState({editId});
  }
  _stopEdit(){
    let editId = null;
    this.setState({editId});
  }
  _saveEdit(product){
    let {name1, price1} =this.refs;
    let newObject = {
      name:name1.value,
      price:parseFloat(price1.value),
      id:product.id
    }
    console.log("newObject",newObject);
    ProductActions.save(newObject);
    this._stopEdit();
  }
  _delete(id){
    ProductActions.delete(id);
  }
  render(){
    const {products} = this.props;
    const {editId} = this.state;
    console.log("products",products);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product=>{
              let id =product.id;
              let name =product.name;
              let price =product.price;
              //let {id,name,price} = product //(same as above)
              if(id === editId){
                  return(
                    <tr key={id}>
                      <td> 
                        <input type="text" ref="name1" defaultValue={name}/>
                      </td>
                      <td>
                        <input type="number" ref="price1" defaultValue={price} min ='0' step ='0.00'/>
                      </td>
                      <td>
                        <button onClick={()=> this._saveEdit(product)}>Save</button>
                        <button onClick={this._stopEdit}>Cancel</button>
                      </td>
                    </tr>
                    )
                }
              
              else{
                return (
                  <tr key ={id}>
                  <td>{name}</td>
                  <td>{Numeral(price).format('$0,0.00')}</td>
                  <td><button disabled = {editId} onClick={()=>this._startEdit(id)}>Edit</button></td>
                  <td><button onClick={()=>this._delete(id)}>Delete</button></td>
                  </tr>
                )
              }
          })}
        </tbody>
      </table>
      )

  }
}