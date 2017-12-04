import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BeerData from './response';

import food from './food.jpg';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beerData: BeerData
        }
    }
    render() {
        return (
            <div className="App">
                <div className='header'>
                    <div className='search-bar-background'>

                        <div className='logo-container'>
                            <img className='logo' />
                            <h1>Beer Food </h1>
                        </div>

                        <SearchBar />

                    </div>

                    <div className='current-beer-container'>
                        <h2 className='current-beer'>{this.state.beerData.name}</h2>
                    </div>
                </div>

                <div className='content-flex-container'>
                    <div className='food-pairing-container flex props'>
                        <h3 className='food-pairing'> Food Pairing</h3>
                        <div className='hr'></div>
                        <p>{this.state.beerData.foodPairings}</p>
                    </div>


                    <div className='beer-description-container flex-props'>
                        <h3 className='beer-description'> Beer Description</h3>
                        <div className='hr'></div>
                        <p>{this.state.beerData.description}</p>
                    </div>

                    <div className='related-beer-container flex-props'>
                        <h3 className='related-beer'> Related Beer</h3>
                        <div className='hr'></div>
                        <ul className='beer-list'>
                            <li>related beer</li>
                            <li>related beer</li>
                            <li>related beer</li>
                            <li>related beer</li>
                            <li>related beer</li>
                            <li>related beer</li>
                        </ul>
                        <div className='beer-img'>
                            <img className='related-beer-img' src='http://clipart-library.com/images/zcX5zyKgi.jpg' />
                        </div>
                    </div>
                </div> {/* END FLEX-CONTAINER */}

            </div>
        );
    }
}

export default App;
