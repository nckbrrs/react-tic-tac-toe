import Square from "./Square";
import '../styles/Board.scss';

const Board = (props: any) => {
    const { board, setBoard, xIsNext, setXIsNext } = props;

    const handleSquareClick = (i: number) => {
        const boardCopy = [...board];

        if (getWinner() || board[i]) {
            return;
        }

        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i: number) => {
        return (
            <Square 
                value={board[i]}
                onClick={() => handleSquareClick(i)}
                isWinner={getWinner()?.squareIndices.includes(i)}
            />
        )
    }

    const getWinner = () => {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < wins.length; i++) {
            const [x, y, z] = wins[i];

            if (board[x] && board[x] === board[y] && board[x] === board[z]) {
                return {
                    player: board[x], 
                    squareIndices: wins[i]
                }
            }
        }

        return null;
    }

    const winner = getWinner();
    let status;

    if (winner) {
        status = `Winner: ${winner.player}`;
    } else if (board.filter((x: string) => { return x !== null}).length === 9) {
        status = `Draw!`;
    } else {
        status = `Next: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="board">
            <div className="board-status">
                {status}
            </div>
            <div className="board-row">
                {[0, 1, 2].map((x) => {
                    return renderSquare(x);
                })}
            </div>
            <div className="board-row">
                {[3, 4, 5].map((x) => {
                    return renderSquare(x);
                })}
            </div>
            <div className="board-row">
                {[6, 7, 8].map((x) => {
                    return renderSquare(x);
                })}
            </div>
        </div>
    )

}

export default Board;