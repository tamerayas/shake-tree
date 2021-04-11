import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapDispatchToProps = dispatch => {
   return {
      //It sets animated apples after tree shake
      animated_apples(data) {
         dispatch({ type: 'SET_ANIMATED_APPLES', payload: { data: data } })
      }
   }
}

class ShakeButton extends Component {
   state = {
      disabled: false,
      animatedApples: [
         { key: 1, className: "apple1 drop-animation1" },
         { key: 2, className: "apple2 drop-animation2" },
         { key: 3, className: "apple3 drop-animation3" },
         { key: 4, className: "apple4" },
         { key: 5, className: "apple5" },
         { key: 6, className: "apple6 drop-animation6" },
         { key: 7, className: "apple7" },
         { key: 8, className: "apple8 drop-animation8" },
         { key: 9, className: "apple9" },
         { key: 10, className: "apple10" },
         { key: 11, className: "apple11" },
         { key: 12, className: "apple12" }
      ]
   }
   

   render() {
      return (
         <Button className="button" disabled={this.state.disabled} onClick={() => {
            this.setState({ disabled: true })
            this.props.onShake()
            //It triggers animated apple classNames 
            this.props.animated_apples(this.state.animatedApples)
         }}>Let's Shake It!</Button>
      )
   }
}
ShakeButton.propTypes = {
   animated_apples: PropTypes.func
}
export default connect(null, mapDispatchToProps)(ShakeButton)