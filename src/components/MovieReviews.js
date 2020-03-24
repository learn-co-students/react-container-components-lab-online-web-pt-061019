// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => <p className="review">{review.headline}</p>)}
  </div>
)

export default MovieReviews;
