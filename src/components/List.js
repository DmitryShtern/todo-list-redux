import React, { Component } from "react"
import PropTypes from "prop-types"

export default class List extends Component {
  editTask = id => {
    // sessionStorage.setItem("woeid", id);

    // this.props.chooseLocation("forecast");
  };

  addToFavorites = (title, location) => {

    // console.log("title: " + title);
    // console.log("location: " + (location));

    // localStorage.setItem(title, location); //JSON.stringify(location));
  };

  render() {
    const { tasks } = this.props

    const listRow = tasks.map((task, idx) => (
      <tr key={task.id}>
        <td>
          <button onClick={() => {
            this.changeCompletion(task.id)
          }}>
            X
					</button>
        </td>

        <td onClick={() => { (this.editTask(task.id)) }}>
          {task.name}
        </td>

        <td>
          <button onClick={() => {
            this.deleteTask(task.id)
          }}>
            X
					</button>
        </td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <button onClick={() => {
                  this.changeCompletionAllTasks()
                }}>
                  X
				      	</button>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="What needs to be done?"
                // onChange={this.handleSearchChange}
                />
              </td>
            </tr>
          </thead>

          <tbody>
            {listRow}
          </tbody>
        </table>
      </div>
    )
  }
}

List.propTypes = {
  name: PropTypes.string.isRequired,
}
