import Store from './store'
import { ToDoModel, ToDoCollection } from './models/models'

const Actions = {
	changeView(viewName) {
		Store._setData({
			taskView: viewName
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
		console.log(todoModel)
		var promise = todoModel.save()
		promise.done(function(response) {console.log(response)})
		promise.fail(function(response) {console.log(response)})

		Store._getProp('todoCollection').add(todoModel)
		e.target.title.value = e.target.category.value = e.target.description.value = ''
		// e.target.priority.value = 'normal'
		Store._setData({
			addForm: {'opacity': '0', 'top': '-100%'}
		})
	},
	fetchTodo() {
		Store._getProp('todoCollection').fetch()
	},
	toggleChecked(cid) {
		var coll = Store._getProp('todoCollection')
		var mod = coll.get(cid)
		mod.set({
			done: mod.get('done') ? false : true
		})
		console.log(mod)
		mod.save()
			.done((resp) => console.log('task saved', resp))
			.fail((resp) => console.log('task save failed', resp))

		Store._setData({
			todoCollection: coll
		})
	},
	removeItem(cid) {
		var coll = Store._getProp('todoCollection')
		var mod = coll.get(cid)
		mod.destroy()
			.done((resp) => console.log('model succesfully deleted', resp))
			.fail((resp) => console.log('model delete failed', resp))
		//coll.remove(this.props.model.cid)
		console.log(Store._setData)
		Store._setData({
			todoCollection: coll
		})
		console.log(Store._setData)
	}
}

export default Actions