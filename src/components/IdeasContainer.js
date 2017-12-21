import React, { Component } from 'react'
import axios from 'axios'

class IdeasContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ideas: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/ideas.json')
			.then(response => {
				console.log('response: ' + JSON.stringify(response))
				this.setState({ideas: response.data})
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className='IdeasContainer'>
				{
					this.state.ideas.map((idea) =>
						<div className='idea tile' key={idea.id}>
							<h4>{idea.title}</h4>
							<p>{idea.body}</p>

						</div>
					)
				}
			</div>
		)
	}
}

export default IdeasContainer