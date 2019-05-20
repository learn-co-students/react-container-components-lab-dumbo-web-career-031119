import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TEGrsy4aqcvWSg1ImMGj9Gi2MPqOU7yq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(reviews => this.setState({
        reviews: reviews.results.slice(0, 3)
      }))
  }

  render() {
    return(
      <div className="latest-movie-reviews" >
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
