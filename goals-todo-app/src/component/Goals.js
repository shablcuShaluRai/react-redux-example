import React, { Component } from "react"
import { generateIdGoals } from '../utils/utils'
import List from './List'

export default class Goals extends Component {
   state = {
     goals: ""
   }

   handleChange(e) {
     this.setState({goals: e.target.value})
   }

   handleSubmit = () => {
     const { goals } = this.state
     goals && this.props.addGoalsAction({
        id:generateIdGoals(),
        goals
       })
     this.setState({
       goals: ""
     })
   }

  render() {
    const { goals, removeGoalsAction } = this.props
    return(
      <div>
        <input
          type= "text"
          placeholder="ADD GOALS"
          value={this.state.goals}
          onChange ={(e) => this.handleChange(e)}
        />
        <button onClick={this.handleSubmit}>Add Goals</button>
        <List
          list={goals}
          removeBtnClick={removeGoalsAction}
         />
      </div>
    )
  }
}
