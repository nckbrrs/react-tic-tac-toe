import { useState } from 'react';
import Board from './Board';
import '../styles/TicTacToe.scss';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const startOver = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }

    return (
        <div className="tic-tac-toe">
            <Board
                board={board}
                setBoard={setBoard}
                xIsNext={xIsNext}
                setXIsNext={setXIsNext}
            />
            <div className="start-over">
                {board.filter((x) => x === null).length !== 9 &&
                <button onClick={() => startOver()}>
                    START OVER
                </button>
                }
            </div>
        </div>
    )
}

export default TicTacToe;