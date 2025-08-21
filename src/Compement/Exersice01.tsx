import { Component } from 'react'

interface State{
    userName: string,
}
export default class Exersice01 extends Component<{},State> {
    constructor(props: {}){
        super(props);
        this.state = {
            userName: "Bui Van Phuong"
        }
    }
    componentDidMount(): void {
        console.log("Components da dc mout");
    }
  render() {
    return (
      <div>
        <h2>{this.state.userName}</h2>
      </div>
    )
  }
}