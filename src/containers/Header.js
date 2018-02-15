import React, { Component } from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { headerActions } from "../actions"

class Header extends Component {

  addTask(name) {
    this.props.addTask(name)
  }

  changeAllTasksCompletion(boolean) {
    this.props.changeAllTasksCompletion(boolean)
  }

  render() {
    // const { year, photos, fetching } = this.props
    const isCompleted = this.props
    console.log("isCompleted: " + isCompleted)

    // const preloader = fetching ? "Loading" : ""

    return (
      <div>
        <p>
          <button onClick={this.addTask.bind(this, isCompleted)}>isCompleted</button>
          <button onClick={this.addTask.bind(this, "Name1")}>Name1</button>
          <button onClick={this.addTask.bind(this, "Name2")}>Name2</button>
          <button onClick={this.addTask.bind(this, "Name3")}>Name3</button>
        </p>
        {/* <p>{preloader}</p>
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p> */}
      </div>
    )
  }
}

Header.propTypes = {
  isCompleted: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    isCompleted: state.header.isCompleted,
    // header: state.header,
    // list: state.list,
    // bar: state.bar,
    // fetching: state.fetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
