// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeStateIndex: 0,
  }

  getReview = reviewsList => {
    const {activeStateIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeStateIndex
    ]

    return (
      <div className="review_container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickRight = () => {
    const {activeStateIndex} = this.state
    const {reviewsList} = this.props
    if (activeStateIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeStateIndex: prevState.activeStateIndex + 1,
      }))
    }
  }

  onClickLeft = () => {
    const {activeStateIndex} = this.state
    if (activeStateIndex > 0) {
      this.setState(prevState => ({
        activeStateIndex: prevState.activeStateIndex - 1,
      }))
    }
  }

  render() {
    const {activeStateIndex} = this.state
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onClickLeft}
          data-testid="leftArrow"
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-size"
          />
        </button>

        {this.getReview(reviewsList)}

        <button
          type="button"
          onClick={this.onClickRight}
          data-testid="rightArrow"
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-size"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
