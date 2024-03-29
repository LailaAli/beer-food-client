import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Beer from './Beer';
import { FadeIn } from 'animate-components';


//import BeerData from './response'; //move this to the default state of reducer for testing
import logo from './beer-food-logo-03.png'

class App extends Component {

    render() {
        return (

            <div className="App">
                <FadeIn duration='3s'>
                    <div className='bg-img'>
                        <div className='logo-container'>
                            <img className='logo' src={logo} />
                        </div>
                    </div>
                    <SearchBar />

                    <Beer />
                </FadeIn>
            </div >
        );
    }
}

export default App;