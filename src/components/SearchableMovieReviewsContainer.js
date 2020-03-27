import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state.searchTerm)
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(movieData => this.setState({reviews: movieData.results}))
            .catch(error => console.log(error))
        e.currentTarget.reset()
    }

    handleChange = e => {
        // console.log(e.target.value)
        this.setState({searchTerm: e.target.value})
    }

    render(){
        return(
            <div>
                <div className='search-field'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='search-term'
                            onChange={this.handleChange}
                        />
                        <input 
                            type='submit'
                            value='Search'
                        />
                    </form>
                </div>  

                <div className='movie-reivews'>
                    <h3>Searchable Movie Reviews</h3>
                    {this.state.reviews ? <MovieReviews reviews={this.state.reviews} /> : null }
                </div>
                
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;