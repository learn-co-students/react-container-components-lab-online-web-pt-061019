import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(URL)
        .then(res => res.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
    }

    componentDidMount(){
        this.fetchReviews();
    }

    render() {
        return (
        <div className="latest-movie-reviews">
        <h4>Latest Movie Reviews</h4>
        <MovieReviews reviews={this.state.reviews} />
        </div>
    )}
}

export default LatestMovieReviewsContainer