import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Header, List, Bar } from "../components"

import { headerActions, listActions, barActions } from "../actions"

class App extends Component {
  render() {
    const { header, list, bar } = this.props

    const { addTask } = this.props.pageActions
    const { loadPhotos } = this.props.appActions

    return (
      <div className="app">
        <Header />
        <List actions={listActions}
          tasks={list.tasks}
          year={wrapper.year}
          fetching={wrapper.fetching}
          setYear={setYear}
          loadPhotos={loadPhotos}
        />
        <Bar />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    header: state.header,
    list: state.list,
    bar: state.bar,
    // fetching: state.fetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
