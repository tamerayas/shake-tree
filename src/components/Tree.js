import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Apple from './Apple'

const mapStateToProps = state => {
   return {
      apples: state.MainReducer.apples
   }
}

class Tree extends Component {
   render() {
      //It returns apple values from store
      return (
         <div className="tree">
            {this.props.apples.map(
               apple =>
                  <Apple key={apple.key} className={apple.className} />
            )}
            <img src="/tree.svg" alt="tree"></img>
         </div>
      )
   }
}
Tree.propTypes = {
   apples: PropTypes.array
}
export default connect(mapStateToProps, null)(Tree)