import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TEGrsy4aqcvWSg1ImMGj9Gi2MPqOU7yq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = (info) => {
    info.preventDefault()
    fetch(URL.concat(this.state.searchTerm.split(" ").join("+")))
    .then(res => res.json())
    .then(reviews => {
      this.setState({
      reviews: reviews.results
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews </label>
          <input id="search-input" onChange={this.handleChange}/>
          <input type='submit' />
        </form>
        {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews}/> : null}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
