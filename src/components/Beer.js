import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchItems } from '../actions';
import { connect } from 'react-redux';
import { ClimbingBoxLoader } from 'react-spinners';


class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    render() {
        if (!this.props.beerData.name.length) {
            return <div ><ClimbingBoxLoader
                color={'#123abc'}
                loading={!this.state.loading}
            /></div>;
        }
        return (
            <div className='beer-info'>

                {/* CURRENT BEER NAME */}

                <div className='current-beer-container'>
                    {/* <h2 className='current-beer'>{this.props.beerData.name}</h2> */}
                    {this.handleNoBeer()}

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

    handleNoBeer = () => {
        if (this.props.beerData.name) {
            return (
                <p>
                    <h2>{this.props.beerData.name}</h2>
                </p>
            )
        } else {
            return (
                <p className='message'>We can't find that beer. Try searching for another beer!</p>
            );
        }
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
        if (!this.props.beerData.name) {
            return (
                <p>
                    {/* {this.props.beerData.name} */}
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
            <li onClick={this.handleBtnClick} key={i} > {beer.name}</li>
        )
    }
    handleBtnClick = (event) => {
        this.props.fetchItems(event.target.innerText);
    }

}



function mapStateToProps(state) {
    return {
        beerData: state.beerData[0],
        differentBeer: state.beerData.slice(1, 7)
    }
}
const mapActionsToProps = { fetchItems }

export default connect(mapStateToProps, mapActionsToProps)(Beer);
