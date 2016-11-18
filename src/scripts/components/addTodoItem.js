import React from 'react'
import Store from '../store'
import Actions from '../actions'

class AddTodoItem extends React.Component {
	_revealForm() {
		Store._setData({
			addForm: {'opacity': '1', 'top': '2rem'}
		})
		console.log(Store._data.addForm)
	}
	render() {
		return (
			<div>
				<button className="icon-plus" onClick={this._revealForm}>add</button>
				<form action="" style={Store._data.addForm} onSubmit={ Actions.addItem }>
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