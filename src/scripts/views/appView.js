import React from 'react'
import Store from '../store'
import Actions from '../actions'

import Header from '../components/header'
import TodoList from '../components/todoList'

const PrimaryApp = React.createClass ({
	componentWillMount() {
		Store.on('updateState', () => {
			this.setState(Store._getData())
		})
	},
	componentWillUnmount() {
		Store.off('updateState')
	},
	getInitialState() {
		return Store._getData()
	},

	render() {
		
		var filteredTasks = this.state.todoCollection
		if (this.state.taskView === 'todo') { filteredTasks = filteredTasks.filter(mod => mod.get('done' === false)) }
		if (this.state.taskView === 'completed') { filteredTasks = filteredTasks.filter(mod => mod.get('done' === true)) }
		if (this.state.taskView === 'all') { filteredTasks = this.state.todoCollection }
		return (
			<div>
				<Header />
				<TodoList collection={filteredTasks} />				
			</div>
		)
	}
})

export default PrimaryApp

