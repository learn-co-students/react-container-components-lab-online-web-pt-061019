import React from "react";

const Review = ({ title, headline }) => (
  <div className="review">
    <h4>{title}</h4>
    <span>{headline}</span>
  </div>
);

export default Review;
