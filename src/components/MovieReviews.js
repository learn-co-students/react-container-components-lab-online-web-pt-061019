import React from "react";
import Review from "./Review";

const MovieReview = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => 
        <Review display_title={review.display_title} 
        byline={review.byline} 
        headline={review.headline} />) }
    </div>
)

export default MovieReview;