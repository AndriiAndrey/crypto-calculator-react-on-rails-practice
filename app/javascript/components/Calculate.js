import React, { Component } from 'react'

class Calculate extends Component {
    render() {
        return (
            <div>
            <h1>How much {this.props.active_currency.name} do you own?</h1>
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-grouup">
                    <label>Enter amount owned:</label><br/>
                    <input className="field" autoComplete="off" type="text" name="amount" 
                    placeholder="How much do you own?" value={this.props.amount}
                    onChange={this.props.handleChange} />
                </div>
                <div className="form-group">
                    <input className="calculate-btn" type="submit" value="Calculate my total"/>
                </div>
            </form>
        </div>
        )
    }
}

export default Calculate;