import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state={
            reviews: [],
            searchTerm: ""
        }
    }

    handleInput = (e) => 
    this.setState({ searchTerm: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL + `&query${this.state.searchTerm}`)
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }))
    }
    

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleInput}
                    id="search-input"
                    type="text">
                    </input> 
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === 'object' && 
                this.state.reviews.length > 0}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer