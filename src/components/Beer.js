import React, { Component } from 'react';
import { FadeIn } from 'animate-components';
import { fetchItems } from '../actions';
import { connect } from 'react-redux';


class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            differentBeer: this.props.differentBeer
        }
    }

    render() {
        console.log("//This is the differentBeer property")
        console.log(this.props.differentBeer)
        return (
            <div className='beer-info'>

                {/* CURRENT BEER NAME */}

                <div className='current-beer-container'>
                    <h2 className='current-beer'>{this.props.beerData.name}</h2>

                </div>


                {/* FOOD PAIRING SECTION */}
                <div className='content-flex-container'>
                    <div className='food-pairing-container flex props'>
                        <h3 className='food-pairing'> Food Pairing</h3>
                        <div className='hr'></div>
                        {this.handleFoodMsg()}
                    </div>

                    {/* BEER DESC SECTION */}
                    <div className='beer-description-container flex-props'>
                        <h3 className='beer-description'> Beer Description</h3>
                        <div className='hr'></div>
                        {this.handleDescMsg()}
                    </div>

                    {/* RELATED BEER SECTION */}
                    <div className='related-beer-container flex-props'>
                        <h3 className='related-beer'> Beers With Similar Names</h3>
                        <div className='hr'></div>
                        <ul className='beer-list'>
                            {this.beerList()}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }


    handleFoodMsg = () => {
        if (this.props.beerData.foodPairings) {
            return (
                <p>
                    {this.props.beerData.foodPairings}
                </p>
            )
        } else {
            return (
                <p className='message'>Our api does not have this information yet. <br />Try searching a similar named beer from below!</p>
            );
        }
    }

    handleDescMsg = () => {
        if (this.props.beerData.description) {
            return (
                <p>
                    {this.props.beerData.description}
                </p>
            )
        } else {
            return (
                <p className='message'>Our api does not have this information yet. <br />Try searching a similar named beer from below!</p>
            );
        }
    }

    handleRelatedBeerMsg = () => {
        if (this.props.beerData.name) {
            return (
                <p>
                    {this.props.beerData.name}
                </p>
            )
        } else {
            return (
                <p className='message'>Our api does not have this information yet. <br />Try searching a similar named beer from below!</p>
            );
        }
    }

    beerList = () => {
        return this.props.differentBeer.map((beer, i) =>
            <li onClick={this.handleBtnClick} key={i} value={beer.name}> {beer.name}</li>

        )
    }
    handleBtnClick = (event) => {
        this.setState({
            differentBeer: event.target.value
        })
        console.log('//This is from the handleClkBtn');
        console.log(this.props.differentBeer);
        this.props.fetchItems(this.state.differentBeer);
        console.log('//This is the click value');
        console.log(event.target.value)
    }

}



function mapStateToProps(state) {
    console.log('//Here is the data from beerData state on beer.js"')
    console.log(state.beerData);
    return {
        beerData: state.beerData[0],
        differentBeer: state.beerData.slice(1, 7)
    }
}
const mapActionsToProps = { fetchItems }

export default connect(mapStateToProps, mapActionsToProps)(Beer);
