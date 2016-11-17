import React from 'react'
// import Store from '../store'
import Actions from '../actions'

class AddTodoItem extends React.Component {
	render() {
		return (
			<div>
				<button>Add Todo</button>
				<form action="" onSubmit={ Actions.addItem }>
					<input name="title" type="text" placeholder="Do this" />
					<select name="priority" defaultValue="Normal">
						<option>Low</option>
						<option>Normal</option>
						<option>Urgent</option>
					</select>
					<input name="category" type="text" placeholder="Type" />
					<textarea name="description" placeholder="Add some details" rows="4" />
					<input name="submit" type="submit" value="add" />
					<input type="hidden" name="done" value="false" />
				</form>
			</div>
		)
	}
}

export default AddTodoItem