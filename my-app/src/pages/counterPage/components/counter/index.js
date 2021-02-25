import './Style.css';
import PropTypes from 'prop-types';


const Counter = ({ handleGoBack, countValue, parityType, handleDecrement, handleIncrement }) => {
    return (
        <div>
        <p>{countValue}</p>
        <p>{parityType}</p>
        
        {countValue % 2 === 0 ?  <div > Even  </div> : <div> Odd </div>}

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
    parityType: PropTypes.string.isRequired,
}

export default Counter;