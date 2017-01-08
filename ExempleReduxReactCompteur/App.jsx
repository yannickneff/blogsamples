import React from 'react'

class App extends React.Component {

	constructor()
	{
		let propTypes = {
		    value: React.PropTypes.number.isRequired,
		    OnPlus: React.PropTypes.func.isRequired,
		    OnMoins: React.PropTypes.func.isRequired
  		}
  		super()
	}

	render() {
		const { value, OnPlus, OnMoins } = this.props
		return (
		<p>
			  {value} fois
			  {' '}
			  <button onClick={OnPlus}>
				PLUS
			  </button>
			  {' '}
			  <button onClick={OnMoins}>
				MOINS
			  </button>
		</p>
		)
	}
}

export default App