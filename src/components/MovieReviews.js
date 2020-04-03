// Code MovieReviews Here
import React, { Component } from 'react';
// import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
// import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <div className="review" key={review.display_title}>
          <h1>{review.headline}</h1>
          <h3>{review.inline}</h3>
          <p>{review.summary}</p>
        </div>
      ))}  
    </div>
  )
}

export default MovieReviews 