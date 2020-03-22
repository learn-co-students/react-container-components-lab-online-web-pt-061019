// Code MovieReviews Here
import React from 'react';

const Review = ({ byline, headline, summary }) => {
    return (
    <div className="review">
        <li>
            <h3>{headline}</h3>
            <h4>By: {byline}</h4>
            <p>{summary}</p>
        </li>
    </div>
    )
}
 
const MovieReviews = ({ reviews }) => (
<div className="review-list">
    <ul>
        {reviews.map(review => 
        <div className="review">
            <li>
               <h3>{review.headline}</h3>
               <h4>By: {review.byline}</h4>
               <p>{review.summary}</p>
            </li>
        </div>
        )}
        </ul>
    </div>
    )

    MovieReviews.defaultProps = {
        reviews: []
    }
    
export default MovieReviews;