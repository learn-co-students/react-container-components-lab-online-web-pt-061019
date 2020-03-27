// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
        <div className='review-list'>
            {reviews.map((review, index) => {
                {/* console.log(review) */}
                return(
                    <div key={index} className='review'>
                        <div>{review.multimedia ? <img src={review.multimedia.src} alt={review.display_Title} /> : null}</div>
                        <h2>{review.headline}</h2>
                        <a href={review.link.url}>{review.link.suggested_link_text}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews;