import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const queryURL = URL + this.state.searchTerm        
        fetch(queryURL)
            .then(response => response.json())
            .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}></input>
                    <button type="submit">Submit</button>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}
