// Code MovieReviews Here
import React from "react";
import Review from "./Review";

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(({ display_title, headline }) => (
      <Review title={display_title} headline={headline} />
    ))}
  </div>
);

export default MovieReviews;
