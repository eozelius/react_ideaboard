import React, { Component } from 'react'

class Idea extends Component {
	/*constructor(props) {
		super(props)
	}*/

	handleClick = (e) => {
		this.props.onClick(this.props.idea.id)
	}

	render () {
		return (
			<div className="tile" key={this.props.idea.id} onClick={this.handleClick} >
			  <h4>
			  	{this.props.idea.title}
			  </h4>
			  <p>
			  	{this.props.idea.body}
			  </p>
			</div>
		)
	}
}

export default Idea