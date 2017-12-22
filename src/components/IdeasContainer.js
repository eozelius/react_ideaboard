import React, { Component } from 'react'
import Idea from './Idea.js'
import axios from 'axios'
import update from 'immutability-helper'

class IdeasContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ideas: [],
			editingIdeaId: null
		}
	}

	addNewIdea = () => {
		axios.post('http://localhost:3001/api/v1/ideas',
		{
			idea: {
				title: '',
				body: ''
			}
		})
		.then(response => {
		  console.log(response)
		  const ideas = update(this.state.ideas, {
		    $splice: [[0, 0, response.data]]
		  })
		  this.setState({
		  	ideas: ideas,
		  	editingIdeaId: response.data.id
		  })
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