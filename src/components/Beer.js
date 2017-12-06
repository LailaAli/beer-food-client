import React, { Component } from 'react';
import { connect } from 'react-redux';


class Beer extends Component {

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

                        {/* <div className='beer-img'>
                            <img className='related-beer-img' src='http://allaboutbeer.com/wp-content/uploads/2015/09/Bottle-Lineup.jpg' /><img className='related-beer-img' src='http://allaboutbeer.com/wp-content/uploads/2015/09/Bottle-Lineup.jpg' />
                        </div> */}
                    </div>
                </div>

            </div>
        )
    }

    handleFoodMsg = () => {
        if (this.props.beerData.foodPairings) {
            return (
                <p>                    {this.props.beerData.foodPairings}
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
            <li key={i} > {beer.name}</li>
        )
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
export default connect(mapStateToProps, null)(Beer);
