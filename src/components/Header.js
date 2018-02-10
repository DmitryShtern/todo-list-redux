import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Header extends Component {

  addTask(name) {
    this.props.addTask(name)
  }

  changeAllTasksCompletion(boolean) {
    this.props.changeAllTasksCompletion(boolean)
  }

  render() {
    // const { year, photos, fetching } = this.props

    // const preloader = fetching ? "Loading" : ""

    return (
      <div className="Photos">
        <p>
          <button onClick={this.onYearBtnClick.bind(this, 2016)}>2016</button>
          <button onClick={this.onYearBtnClick.bind(this, 2015)}>2015</button>
          <button onClick={this.onYearBtnClick.bind(this, 2014)}>2014</button>
        </p>
        {/* <p>{preloader}</p>
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p> */}
      </div>
    )
  }
}

Header.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  setYear: PropTypes.func.isRequired,
}
