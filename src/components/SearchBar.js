import React, { Component } from 'react';
import { go } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <input onChange={this.handleSearchChange} type='text' placeholder='Search for a beer' value={this.props.searchInput} className='search-input-box'/>

                <div className='btn-operators'>
                    <button onClick={this.handleBtnClick} type='button' className='go-btn'>Go</button>
                </div>
                
            </div>
        );
    }

    handleSearchChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleBtnClick = (event) => {
        this.props.go(this.state.searchInput)
    }

}

const mapActionsToProps = { go }

export default connect(null, mapActionsToProps)(SearchBar);