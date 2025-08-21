import { Component } from 'react'

interface State{
    company: string
}

export default class Exercise03 extends Component<{},State> {
    constructor(props: {}){
        super(props);
        this.state = {
            company: "Rekkei education"
        }
    }

    handleChangeState= () => {
        this.setState({
            company: "rekkei soft"
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.company}</h2>
        <button onClick={this.handleChangeState}> Change state</button>
      </div>
    )
  }
}