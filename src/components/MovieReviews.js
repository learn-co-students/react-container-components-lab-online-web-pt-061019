// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  const renderReviews = () => {
    return props.reviews.map(review => {
      return (
        <li className="review">{review.headline}, by {review.byline}</li>
      )
    })
  }

  return (
    <div className="review-list">
      {renderReviews()}
    </div>
  );
}

export default MovieReviews;

