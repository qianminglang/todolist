import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './todoItem'
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
          <label htmlFor='insertint'>请输入内容</label>
          <input
            id='insertint'
            className='input'
            value={this.state.inputValue}
            onChange={this.handlerInputChange.bind(this)}
          />
          <button onClick={this.buttonClick.bind(this)}>提交</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <TodoItem content={item} index={index} deleteItem={this.itemRemove.bind(this)} />
                </div>
              )
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