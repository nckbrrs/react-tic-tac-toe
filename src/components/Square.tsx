import '../styles/Square.scss';

const Square = (props: any) => {
    const classNames = () => {
        let retVal = "square";

        if (props.isWinner) {
            retVal += " winner";
        }

        return retVal;
    }
    
    return (
        <button className={classNames()} onClick={props.onClick}>
            {props.value}
        </button>
    )
}



export default Square;