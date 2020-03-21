import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state={
      searchTerm: '',
      reviews: []
    }
  }

  submitEvent= e => {
    e.preventDefault()
    let query = '&query='+ this.state.searchTerm
    console.log(URL.concat(this.state.searchTerm))
    // fetch(URL.concat(this.state.searchTerm))
    fetch(URL.concat(query))
    .then(resp => resp.json())
    .then(resp => this.setState({reviews: resp.results}))
  }

  // handleChange = (e)=>{
  //   console.log(e.target.value)
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitEvent}> 
          <input type="text" name="movieName" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <h3>The Searched Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer