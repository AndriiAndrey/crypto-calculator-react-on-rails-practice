import React, { Component } from 'react'

class Search extends Component {
render() {

    const searchResult = this.props.search_results.map(
    curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} 
                className="currency-list-item">
        
            <a href="#" className="currency">
                <span>{curr.name}</span>
                <span className="currency_symbol">{curr.currency_symbol}</span>
            </a>
        
        
        </li>
    )

    return (
        <div>
            <h1>Cryptocurrency Portfolio Calculator</h1>
            <form>
                <div className="form-grouup">
                    <label>Search for a Currency:</label><br/>
                    <input className="field" autoComplete="off" type="text" name="name" 
                    placeholder="Ex: Bitcoin, Litecoin, Etherum..." value={this.props.name}
                    onChange={this.props.handleChange} />
                </div>
                <div className="currency-list">
                    {searchResult}
                </div>
            </form>
        </div>
    )
}
}
export default Search;