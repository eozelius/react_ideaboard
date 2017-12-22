import React, { Component } from 'react'

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.idea.title,
			body:  this.props.idea.body
		}
	}

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})

		console.log(JSON.stringify(this.state))
	}

	render() {
		return (
			<div className='tile'>
				<form>
					<input className='input' value={this.state.title} type='text' name='title' placeholder='title' onChange={this.handleInput} />
					<textarea className='input' value={this.state.body} name='body' placeholder='description' onChange={this.handleInput} ></textarea>
				</form>
			</div>
		)
	} 
}

export default IdeaForm