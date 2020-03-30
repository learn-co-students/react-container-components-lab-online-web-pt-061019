// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            { props.reviews.map(review => ( 
                <div key={review.headline} className="review">
                    <header>
                        <a href={ review.link.url }>{ review.headline }</a>
                        <br/>
                        <span>By { review.byline }</span>
                    </header>
                    <blockquote>
                        { review.summary_short }
                    </blockquote>
                </div>
            )) 
            }
        </div>
    )
}

export default MovieReviews;
