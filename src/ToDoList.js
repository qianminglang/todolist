import React, { Component, Fragment } from 'react';
class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render () {
    return (
      <Fragment>
        <div>
          {/* 下面是input框 */}
          <input
            value={this.state.inputValue}
            onChange={this.handlerInputChange.bind(this)}
          />
          <button onClick={this.buttonClick.bind(this)}>提交</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.itemRemove.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handlerInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  buttonClick (e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  itemRemove (index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

}
export default ToDoList;