import Backbone from 'backbone'
import _ from 'underscore'
import {ToDoCollection, ToDoModel} from './models/models'

const Store = _.extend(Backbone.Events, {
	_data: {
		todoCollection: new ToDoCollection(),
		taskView: 'all', // todo : done : all
		categoryView: 'all',
		addForm: {'opacity': '0', 'top': '-100%'}
	},
	_getProp(key) { return this._data[key] },
	_getData() { return this._data },
	_emitChange() { this.trigger('updateState') },
	_setData(stateObj) {
		this._data = _.extend(this._data, stateObj)
		this._emitChange()
		},
	_initialize() {
		this._getProp('todoCollection').on('update sync',
			() => {this._emitChange()
		})
	}
})

Store._initialize()

export default Store