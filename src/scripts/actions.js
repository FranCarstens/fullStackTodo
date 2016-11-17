import Store from './store'
import { ToDoModel, ToDoCollection } from './models/models'

const Actions = {
	changeView(viewName) {
		Store._setData({
			taskView: 'viewName'
		})
	},
	addItem(e) {
		e.preventDefault()
		var taskInfo = {
			title: e.target.title.value,
		 	priority: e.target.priority.value,
		 	category: e.target.category.value,
		 	description: e.target.description.value,
		 	done: false
		}
		var todoModel = new ToDoModel(taskInfo)
		var promise = todoModel.save()
		promise.done(function(response) {console.log(response)})
		promise.fail(function(response) {console.log(response)})

		Store._getProp('todoCollection').add(todoModel)
		e.target.title.value = e.target.category.value = e.target.description.value = ''
		// e.target.priority.value = 'normal'
	},
	toggleChecked(cid) {
		var coll = Store._data.todoCollection
		var mod = coll.get(cid)
		mod.set({
			done: mod.get('done') ? false : true
		})

		mod.save()
			.done((resp) => console.log('task saved', resp))
			.fail((resp) => console.log('task save failed', resp))

		Store._setData({
			todoCollection: coll
		})
	},
	removeItem() {
		var coll = Store._data.todoCollection
		coll.remove(this.props.model.cid)
		Store._emitChange()
	}
}

export default Actions