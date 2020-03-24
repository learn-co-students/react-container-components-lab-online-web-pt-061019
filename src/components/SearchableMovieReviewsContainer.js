import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     reviews: [],
  //     searchTerm: ''
  //   }
  // }

  state = {
    reviews: [],
    searchTerm: ''
  }

  // https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=crime

  // componentDidMount(searchTerm) {
  //   fetch(URL + `?query=${searchTerm}`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   // .then((data) => {
  //   //   console.log(data);
  //   // });
  //   .then(data => this.setState({
  //     reviews: data.reviews
  //   }))
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state.searchTerm) // crime
    // this.props.fetchReviews(this.state.searchTerm)
    // let searchTerm = event.target.value

    // console.log(`Searching for: ${this.state.searchTerm}`)

    fetch(URL + `&query=${this.state.searchTerm}`)
    .then((response) => {
      return response.json();
    })
    .then(data => this.setState({
      reviews: data.results // results or reviews
    }))
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    }, console.log("The query is currently:", this.state.searchTerm))
    // console.log("The query is currently:", this.state.query)
  }

  render() {
    return (
      <form className="SearchableMovieReviewsContainer" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter a search query" value={this.state.query} onChange={this.handleSearch} />

        <MovieReviews reviews={this.state.reviews} /> // I keep forgetting to pass the state or props to the child component
      </form>
    )
  }
}
