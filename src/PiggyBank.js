import React, {Component, Fragment} from 'react';

class PiggyBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0

        }
        this.deposit = this.deposit.bind(this)
        this.withdraw = this.withdraw.bind(this)

    }

    deposit() {
        this.setState(previousState => {
            return {total: previousState.total + parseInt(this.props.amount)}
        })
    }

    withdraw() {
        this.setState(previousState => {
            let newAmount = previousState.total - this.props.amount;
            if (newAmount < 0) {
                newAmount = 0;
            }
            return {total: newAmount}
        })
    }

    render() {
        return (
            <Fragment>
            <h1>{this.props.title}</h1> 
            <p>Total: £{this.state.total}</p>
            <button onClick={this.deposit}>Deposit</button>
            <button onClick={this.withdraw}>withdraw</button>
            </Fragment>
        )
    }
}

export default PiggyBank;