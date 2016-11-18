import React from 'react'
import ToDoItem from './todoItem'

class ToDoList extends React.Component {
	render() {
		var coll = this.props.collection
		console.log('here ya go coll',coll)
		return (
			<section id="todo_list">
				{ coll.map((item, index) => <ToDoItem model={item} key={index} />)}
			</section>
		)
	}
}

export default ToDoList

