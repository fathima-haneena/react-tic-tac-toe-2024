import React, { useEffect, useState } from 'react';
import SquareComponent from "./components/SquareComponent";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
    const [gameState, updateGameState] = useState(clearState);
    const [isXChance, updateIsXChance] = useState(true); 


    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index] )
            return;
        strings[index] = isXChance ? "X" : "0";
        updateIsXChance(!isXChance);
        updateGameState(strings);
    };

    const clearGame = () => {
        updateGameState(clearState);
       
    };

    useEffect(() => {
        const currentWinner = calculateWinner(gameState);
        if (currentWinner) {
            
            setTimeout(() => {
                alert(`Ta da! ${currentWinner} won the Game!`);
                clearGame(); 
            }, 100); 
        }
    }, [gameState]);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div className="app-header">
            <p className="heading-text">React Tic Tac Toe - 2024</p>
            <p className="player-turn">{`Current turn: ${isXChance ? "X" : "0"}`}</p> 
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]} />
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]} />
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]} />
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]} />
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]} />
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]} />
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]} />
                <SquareComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]} />
                <SquareComponent onClick={() => onUserClicked(8)} state={gameState[8]} />
            </div>
            <button className="clear-button" onClick={clearGame}>Clear Game</button>
            <p className="fc-aqua fw-600">Developed by: Aneena</p>
        </div>
    );
}

export default App;
