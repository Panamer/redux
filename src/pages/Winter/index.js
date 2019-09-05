import React from 'react'

class Wind extends React.Component {
	locationChange = () => {
		this.props.history.push('/road')
	}

	render() {
		return (
			<div>
				<p>this is winter</p>
				<button onClick={this.locationChange}>跳转</button>
			</div>
		)
	}
}

export default Wind
