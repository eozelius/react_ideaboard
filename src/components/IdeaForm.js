import React, { Component } from 'react'
import axios from 'axios'

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.idea.title,
			body:  this.props.idea.body
		}
	}

	handleInput = (e) => {
		this.props.resetNotification()
		this.setState({[e.target.name]: e.target.value})
	}

	handleBlur = (e) => {
		const idea = {
	    title: this.state.title,
	    body: this.state.body
	  }

	  axios.put(
	  	`http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
	  	{
	  		idea: idea
	  	})
	  .then(response => {
	  	console.log(JSON.stringify(response))
	  	this.props.updateIdea(response.data)
	  })
	  .catch(error => {
	  	console.log(`error: ${error}`)
	  })
	}

	render() {
		return (
			<div className='tile'>
				<form>
					<input 
						className='input' 
						value={this.state.title} 
						type='text' name='title' 
						placeholder='title' 
						onChange={this.handleInput}
						onBlur={this.handleBlur}
						ref={this.props.titleRef} />
					<textarea 
						className='input' 
						value={this.state.body} 
						name='body' 
						placeholder='description' 
						onChange={this.handleInput}
						onBlur={this.handleBlur} ></textarea>
				</form>
			</div>
		)
	} 
}

export default IdeaForm