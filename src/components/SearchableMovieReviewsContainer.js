import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: ""
    }
    handleSumbit=(event)=>{
        event.preventDefault()
        fetch(URL+ `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(reviewData => this.setState({reviews: reviewData.results}))
    }

    handleOnChange =(event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSumbit}>
                <input
                type="text"
                onChange ={this.handleOnChange}
                />
                <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}