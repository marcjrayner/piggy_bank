import React, {Component, Fragment} from 'react';

class PiggyBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }

        this.deposit = this.deposit.bind(this)
    }

    deposit() {
        this.setState(previousState => {
            return {total: previousState.total + 5}
        })
    }

    render() {
        return (
            <Fragment>
            <h1>{this.props.title}</h1> 
            <p>Total: £{this.state.total}</p>
            <button onClick={this.deposit}>Deposit</button>
            </Fragment>
        )
    }
}

export default PiggyBank;