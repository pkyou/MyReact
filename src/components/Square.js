import React from 'react'

export default class Square extends React.Component{
    constructor(props){
        super(props)
        this.state={stateValue:null}
    }

    render(){
        return(
            <button className="square" 
            onClick = {()=> this.setState({stateValue : 'X'})}>
                {this.state.stateValue}
            </button>
        )
    }
}