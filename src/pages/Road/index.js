import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { addRoad } from '../../reducers/roadReducer'

const mapStateToProps = (state, ownProp) => {
	return {
		road: state.roadState
	}
}

const mapDispatchToProps = {
	addRoad
}

class Road extends React.Component {
	static propTypes = {
		road: propTypes.object
	}

	render() {
		return (
  <div>
				<h2>
      {' '}
					this is road components
      {this.props.road.roadData}
      {' '}
    </h2>
				<button
      onClick={() => {
						this.props.addRoad()
					}}
    >
					加一个
    </button>
  <button
  onClick={() => {
						this.props.history.push('/winter')
					}}
				>
					jump
				</button>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Road)
