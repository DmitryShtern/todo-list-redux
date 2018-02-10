import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Header, List, Bar } from "../components"
import * as pageActions from "../actions/PageActions"

class App extends Component {
  render() {
    const { user, wrapper } = this.props
    const { setYear } = this.props.pageActions
    const { loadPhotos } = this.props.pageActions

    return (
      <div className="app">
        <Header name={user.name} />
        <List
          photos={wrapper.photos}
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
    user: state.user,
    wrapper: state.wrapper,
    // fetching: state.fetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
