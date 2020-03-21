// Code MovieReviews Here
import React from 'react'

const MovieReviews =({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps ={
  reviews: []
}

const Review = ({title, headline}) =>(
  <div className="review">
    <h3>{title}</h3>
    <p>{headline}</p>
  </div>
)

export default MovieReviews