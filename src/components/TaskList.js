import React, { Component } from 'react';


class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTaskId: ''
    };

    this.tasksRef = this.props.firebase.database().ref("tasks");
  }


  // handler for array change (list of tasks)
  handleTaskChange(e) {
    this.setState({ newTaskId: e.target.value })
  }
   // creates a new task
  createTask(newTaskId) {
    this.tasksRef.push({
      taskId: newTaskId

    });
    this.setState({ newTaskId: '' })
  }
  componentDidMount() {
    this.tasksRef.on('child_added', snapshot => {
      console.log(snapshot);
      const task = snapshot.val();
      task.key = snapshot.key
      this.setState({ tasks: this.state.tasks.concat( task ) })


      //const task = { key: snapshot.key, value: snapshot.val() }
      //const task = snapshot.val();
      //task.key = snapshot.key;
      //this.setState({ tasks: this.state.tasks.concat( task ) })
    });
  }
  // calls createTask
  handleSubmit(e) {
    e.preventDefault();
    this.createTask(this.state.newTaskId);
  }

  render() {
    return (
      <section>
        <h1> Active Tasks </h1>
        { this.state.tasks.map( task =>
          <li key = {task.key} >
            {task.taskId}
          </li>
        )}

        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <input type= "text" value= {this.state.newTaskId} onChange={ (e) => this.handleTaskChange(e) }/>
          <input type = "submit" />

        </form>
      </section>

    );
  }

}
export default TaskList;
