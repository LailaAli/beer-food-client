import React, { Component } from 'react';
import { add } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'Two Hearted Ale ',
            missingBeer: ' '
        }
    }
    render() {
        return (
            <div className="input-form-container">
                <input onChange={this.handleFirstNumChange} type='text' placeholder='Search for a beer' value={this.state.search} />
                <div className='btn-operators'>
                    <button onClick={this.handleBtnClick} type='button' className='add-btn'>go</button>
                </div>
            </div>
        );
    }
    handleFirstNumChange = (event) => {
        this.setState({
            firstNumber: Number(event.target.value)
        })
    }

    handleBtnClick = (event) => {
        this.props.add(this.state.firstNumber, this.state.secondNumber)
    }

}

const mapActionsToProps = { add }

export default connect(null, mapActionsToProps)(SearchBar);