import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='logo-container'>
                    <img className='logo' />
                </div>
                <SearchBar />
                <div className='current-beer-container'>
                    <h2>Current Beer</h2>
                </div>
                <div className='beer-description-container'>
                    <h2 className='beer-description'> Beer Description</h2>
                    <p>beer description</p>
                </div>
                <div className='food-pairing-container'>
                    <h2 className='food-pairing'> Food Pairing</h2>
                    <p>food pairing text</p>
                </div>
                <div className='related-beer-container'>
                    <h2 className='related-beer'> Related Beer</h2>
                    <p>related beer</p>
                    <img />
                </div>

            </div>
        );
    }
}

export default App;
