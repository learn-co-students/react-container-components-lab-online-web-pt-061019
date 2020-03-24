import React from "react";

const Review = ({ display_title, byline, headline }) => (
    <div className="review">
        <h3>{ display_title }</h3>
        <h4>Directed by: { byline }</h4>
        <h4>{ headline }</h4>
        <br></br>
    </div>
)

export default Review;