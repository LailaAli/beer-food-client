import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Beer from './Beer';

//import BeerData from './response'; //move this to the default state of reducer for testing
import logo from './beer-food-logo-03.png'

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className='header changing-bg'>
                    <div className='search-bar-background'>
                        <div className='logo-container'>
                            <img className='logo' src={logo} />
                        </div>
                        <SearchBar />
                    </div>

                    <Beer />

                </div>

            </div >
        );
    }
}

export default App;