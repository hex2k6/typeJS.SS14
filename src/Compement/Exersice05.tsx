import { Component, type ChangeEvent } from 'react'
import "./Exersice05.css"; 

interface State{
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}
export default class Exercise05 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state = {
            productCode:"",
            productName:"",
            price:0,
            quantity:1,
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const{name, value} = e.target;
        this.setState({[name]: value} as any);  
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dữ liệu sản phẩm: ",this.state);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm mới sản phẩm</h2>
        <div>

        <div>
          <label>Mã sản phẩm:</label>
          <input
            type="text"
            name="productCode"
            value={this.state.productCode}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="productName"
            value={this.state.productName}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Giá:</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Số lượng:</label>
          <select
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

    
        <button type="submit">Đăng ký</button>
        </div>
      </form>
    )
  }
}