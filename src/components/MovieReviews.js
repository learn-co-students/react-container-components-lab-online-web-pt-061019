// Code MovieReviews Here
import React from 'react';

const Review = ({ title, headline }) => (
    <div className="review">
        <h4>{title}</h4>
        <p>{headline}</p>
    </div>
)

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      {reviews.map(({ title, headline }) => (
        <Review title={title} headline={headline} />
      ))}
    </div>
);
    
export default MovieReviews;