import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      apples: state.MainReducer.apples
   }
}

class Apple extends Component {
   render() {
      //It returns apple.svg
      return (
         <img src="/apple.svg" alt="apple" className={this.props.className} />
      )
   }
}

Apple.propTypes = {
   className: PropTypes.string,
}

export default connect(mapStateToProps, null)(Apple)

