import React, { Component } from 'react'

export default class ClassBasedComponent extends Component {
    //initialization

    constructor(props){
        super(props);
        this.state= {
            count:1
        }
    }

    //mounting
    componentDidMount(){
        console.log("componend did mount");
    }
    //updating 
    componentDidUpdate(){
        console.log("component did update");
    }
    // component should update
    shouldComponentUpdate(nextProps, nextState){
        console.log('should component');
    }

    //unmounting
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={()=> this.setState({count: this.state.count+1})}>Click me</button>
            <p>Count : {this.state.count}</p>
      </div>
    )
  }
}

// components life cycle method
// 1 initializtion
// 2 component Mount
// 3 component UPdate
// 4 componrnt didMount

