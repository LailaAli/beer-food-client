import React, { Component } from 'react';
import { fetchItems } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ' '
        }
    }
    render() {
        return (
            <div className="search-bar-container">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleSearchChange} type='text' placeholder='Search for a beer' value={this.state.searchInput} className='search-input-box' />

                    <a onClick={this.handleBtnClick} type='button'  class="fancy-btn">Search</a>


                </form>

            </div>
        );
    }

    handleSearchChange = (event) => {
        this.setState({
            searchInput: event.target.value,
        })
    }

    handleBtnClick = (event) => {
        this.props.fetchItems(this.state.searchInput)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchItems(this.state.searchInput);
    }

}

const mapActionsToProps = { fetchItems }

export default connect(null, mapActionsToProps)(SearchBar);