import React from 'react'

class Wind extends React.Component {
	constructor(props) {
		super(props)
		this.locationChange = this.locationChange.bind(this)
	}

	locationChange() {
		this.props.history.push('/road')
	}

	render() {
		return (
			<div>
				<p>this is big wind 呼呼呼</p>
				<button type="button" onClick={this.locationChange}>
					跳转
				</button>
			</div>
		)
	}
}

export default Wind
