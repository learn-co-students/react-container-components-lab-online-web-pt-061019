import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    constructor(){
      super()
      this.state={
        searchTerm: "",
        reviews: []
      }
    }

    submitEvent= e => {
      e.preventDefault()
      const queryURL = URL + "&query=" + this.state.searchTerm;
      fetch(queryURL)
        .then(response => response.json())
        .then(jsonObj => this.setState({ reviews: jsonObj.results }));
    }

    handleChange = e =>{
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render(){
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.submitEvent}> 
             <input type="text" onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
        <h4>Matching Movie Reviews</h4>
        <MovieReviews reviews={this.state.reviews} />
        </div>
        );
    }
}
export default SearchableMovieReviewsContainer