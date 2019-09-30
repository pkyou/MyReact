import React from 'react'
import Board from './Board'
import '../css/Game.css'

export default class Game extends React.Component{
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board></Board>
                </div>

                <div className="game-info">
                    <div>{/* status*/}</div>
                    <div>{/* TODO*/}</div>
                </div>
            </div>
        )
    }
}