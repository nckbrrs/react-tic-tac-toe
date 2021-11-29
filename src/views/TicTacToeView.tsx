import TicTacToe from '../components/TicTacToe';
import '../styles/TicTacToeView.scss';

const TicTacToeView = () => {
    return (
        <div className="tic-tac-toe-view">
            <div className="header">
                <h1>Tic Tac Toe</h1>
            </div>
            <TicTacToe/>
        </div>
    )
}

export default TicTacToeView;