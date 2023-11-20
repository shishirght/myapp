import React from "react";

class ParentClassComponent extends React.Component{
    // constructor
    constructor(props){
        super(props)
        console.log("This is constructor");
        this.state = {
            count:0        
        }
    }

    handleIncrement = () => {
        this.setState({count:this.state.count+1}) ;
    }

    componentDidMount(){
        console.log("Component did mounting..by Class");
    }

    componentDidUpdate(){
        console.log("Component updated mounting..by Class");
    }
    
    componentWillUnmount(){
        console.log("Component will be unmounted( about to unmount)..by Class");
    }
    componentDidCatch(){
        console.log("Components catched..by Class");
    }

    //render
    render(){
        console.log("Inside RENDER method")
        return(
            <>
            <h1>Counter={this.state.count}</h1>
            <button onClick={this.handleIncrement}>+</button>
            </>
        );
    }
    
    
    }
    
    export default ParentClassComponent;