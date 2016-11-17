import React from 'react'
import Store from '../store'
import Actions from '../actions'
import AddTodoItem from './addTodoItem'

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="logo"><h1>Checkd</h1></div>
				<Navigation />
				<AddTodoItem />
			</header>
		)
	}
}

class Navigation extends React.Component {
	_handleNavClick(e) {
		let newView = e.target.value
		Actions.changeView(newView)
	}
	render() {
		var listBuilder = (title, index) => {
			return (
				<li 
					onClick={this._handleNavClick}
					className={	this.props.taskview === title ? title + ' ' + active : title }
					title={title}
					key={index}
				>{title}</li>
			)
		}
		return (
			<nav>
				<ul>
				{['todo','completed','all'].map(listBuilder)}
				</ul>
			</nav>
		)
	}
}

export default Header