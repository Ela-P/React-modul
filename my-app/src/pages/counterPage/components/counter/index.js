import './Style.css';
import PropTypes from 'prop-types';


const Counter = ({ handleGoBack, isEven, countValue, parityType, handleDecrement, handleIncrement }) => {
    return (
        <div>
            <div className='counter' > 
            <div className='counterValue' >{countValue}</div> 
            <div >{parityType}</div>
            <div className='counterType'>{isEven ? 'Even' : 'Odd'}</div>
        

            <div > 
            <button className='counterBut' onClick={handleDecrement}>-</button>
            <button className='counterBut' onClick={handleIncrement}>+</button>
            </div>
            </div>

            <div > 
            <button className='counterButt' onClick={handleGoBack}> Go back </button>
            </div>

        </div>
    );
};

Counter.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    countValue: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
    parityType: PropTypes.string.isRequired,
}

export default Counter;