import React, { Component } from 'react'
import Idea from './Idea.js'
import axios from 'axios'

class IdeasContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ideas: []
		}
	}

	addNewIdea() {
		axios.post('http://localhost:3001/api/v1/ideas',
		{
			idea: {
				title: '',
				body: ''
			}
		})
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		})
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/ideas.json')
			.then(response => {
				this.setState({ideas: response.data})
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className='IdeasContainer'>
				<button className="newIdeaButton"
					onClick={this.addNewIdea}>
				  New Idea
				</button>
				{this.state.ideas.map((idea) => {
				  return (<Idea idea={idea} key={idea.id} />)
				})}
			</div>
		)
	}
}

export default IdeasContainer