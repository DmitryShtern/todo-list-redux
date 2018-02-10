import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Bar extends Component {

  onYearBtnClick(year) {
    this.props.setYear(year)
    this.props.loadPhotos(true)
  }

  render() {
    const { year, photos, fetching } = this.props

    const preloader = fetching ? "Loading" : ""

    return (
      <div className="Photos">
        <p>
          <button onClick={this.onYearBtnClick.bind(this, 2016)}>2016</button>
          <button onClick={this.onYearBtnClick.bind(this, 2015)}>2015</button>
          <button onClick={this.onYearBtnClick.bind(this, 2014)}>2014</button>
        </p>
        <p>{preloader}</p>
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p>
      </div>
    )
  }
}

Bar.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  setYear: PropTypes.func.isRequired,
}
