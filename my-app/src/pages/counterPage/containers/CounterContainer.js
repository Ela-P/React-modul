import React, {Component} from 'react';
import Counter from '../components/counter/Counter';

class CounterContainer extends Component {
    constructor(props)  {
        super(props)

        this.state = {
            countValue: 0,

            parityType: `Чётное`
        }
    }

    handleAdd  = () => {
        this.setState({ countValue: this.state.countValue + 1})
    }

    handleRemove  = () => {
        this.setState({ countValue: this.state.countValue - 1})
    }

    render() {
        return (
           <Counter counterValue={this.state.countValue} type={this.state.parityType} handleAdd={this.handleAdd} handleRemove={this.handleRemove}/>
        );
    }
}

export default CounterContainer;