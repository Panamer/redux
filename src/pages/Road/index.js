import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addRoad, replace } from '../../reducers/roadReducer'
import './index.css'

const mapStateToProps = state => {
	return {
		roadData: state.roadState.roadData
	}
}

const mapDispatchToProps = {
	addRoad,
	replace
}

const propTypes = {
	roadData: PropTypes.number.isRequired,
	addRoad: PropTypes.func.isRequired
}

class Road extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {}

	handleChange(event) {
		this.props.replace(Number(event.target.value))
	}

	jump() {
		this.props.history.push('/winter')
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.roadData}
					onChange={this.handleChange}
					className="el-input"
				/>
				<h2>
					this is road components
					{` ${this.props.roadData}`}
				</h2>
				<button onClick={this.props.addRoad.bind(this)}>加一个</button>
				<button onClick={this.jump.bind(this)}>jump</button>
			</div>
		)
	}
}

Road.propTypes = propTypes

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Road)
