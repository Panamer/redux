import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addRoad } from '../../reducers/roadReducer'

const mapStateToProps = state => {
	return {
		roadData: state.roadState.roadData
	}
}

const mapDispatchToProps = {
	addRoad
}

const propTypes = {
	roadData: PropTypes.number.isRequired,
	addRoad: PropTypes.func.isRequired
}

class Road extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {}

	jump() {
		this.props.history.push('/winter')
	}

	render() {
		return (
			<div>
				<h2>
					this is road components
					{this.props.roadData}
				</h2>
				<button onClick={this.props.addRoad.bind(this)}>加一个</button>
				<button onClick={this.jump.bind()}>jump</button>
			</div>
		)
	}
}

Road.propTypes = propTypes

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Road)
