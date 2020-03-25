// Code MovieReviews Here
import React from 'react';

const MovieReviews = props=> {
    return (
    <div className="review-list">
     {props.reviews.map(review => (
     <div className="review" key={review.display_title}>
     <h2>{review.headline}</h2>
     <h4>{review.byline}</h4>
     <p>{review.summary_short}</p>
     </div>
     )
     )}
    </div>
)}

export default MovieReviews