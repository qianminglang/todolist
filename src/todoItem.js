import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handerClick = this.handerClick.bind(this);
  }

  render () {
    return (
      <div onClick={this.handerClick}>{this.props.content}</div >
    )
  }

  handerClick () {
    alert(this.props.index)
    this.props.deleteItem(this.props.index);
  }
}

export default TodoItem;