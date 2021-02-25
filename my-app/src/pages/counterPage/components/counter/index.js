import './Style.css';
import PropTypes from 'prop-types';


const Counter = ({ handleGoBack, isEven, countValue, parityType, handleDecrement, handleIncrement }) => {
    return (
        <div>
        <p>{countValue}</p>
        <p>{parityType}</p>
        <p>{isEven ? 'Even' : 'Odd'}</p>
        

        <div> 
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        </div>


        <button onClick={handleGoBack}> Go back </button>

        </div>
        
     );
};

Counter.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    countValue: PropTypes.number.isRequired,
    isEven: PropTypes.number.isRequired,
    parityType: PropTypes.string.isRequired,
}

export default Counter;