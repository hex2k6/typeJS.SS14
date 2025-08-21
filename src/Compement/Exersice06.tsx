import { Component } from 'react'
import './Exersice06.css'
interface State{
    gender: string,
    submitted: string
}

export default class Exersice06 extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            gender: "",
            submitted: ""
        }
    }

    hadleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({gender: event.target.value})
    }

    handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        this.setState({submitted: this.state.gender})
    }
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='formB6'>
            <h3>Giới tính: {this.state.submitted && this.state.submitted}</h3>
            <label className='label'>
                <input className='input' type="radio" value="Nam" checked={this.state.gender === "Nam"} onChange={this.hadleChange}/>
                Nam
            </label>
            <br />
            <label className='label'>
                <input className='input' type="radio" value="Nữ" checked={this.state.gender === "Nữ"} onChange={this.hadleChange}/>
                Nữ
            </label>
            <br />
            <label className='label'>
                <input className='input' type="radio" value="Khác" checked={this.state.gender === "Khác"} onChange={this.hadleChange} />
                Khác
            </label>
            <br />
            <button type='submit' className='button'>Submit</button>
        </form>

        
      </div>
    )
  }
}