import { Component } from 'react'

interface State{
    company: string
}

export default class Exercise04 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state ={
            company:"Học code để đi làm"
        }
    }

    handleChangeState = () =>{
        this.setState({
            company: "Học code sẽ thành công. Cố lên!!!"
        })
    }
    shouldComponentUpdate(nextProps: {}, nextState: State) {
    console.log("State mới:", nextState.company);
    return false;
  }
    render() {
    return (
      <div>
        <h2>Slogan: {this.state.company}</h2>
        <button onClick={this.handleChangeState}>Change state</button>
      </div>
    )
  }
}