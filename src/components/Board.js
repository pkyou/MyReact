import React from 'react'
import Square from './Square'
import '../css/Board.css'

export default class Board extends React.Component{
    
    renderSquare(value){
        return <Square value = {value}/>
    }
    render(){
        const status = 'Next player: X'
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
            </div>
        )
    }
}