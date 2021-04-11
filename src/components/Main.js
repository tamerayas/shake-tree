import React, { Component } from 'react'
import { Shake } from 'react-motions'

import Tree from './Tree'
import Basket from './Basket'
import ShakeButton from './ShakeButton'

class Main extends Component {
   state = {
      shake: false
   }
   render() {
      return (
         <div>
            <ShakeButton onShake={() => this.setState({ shake: true })} disabled={this.props.onShake}/>
            <div className="tree">
               {
                  //When click to button tree will be shaked for 3 seconds.
                  this.state.shake ?
                     <Shake duration={3}>
                        <Tree />
                     </Shake> :
                     <Tree />
               }
               <Basket />
            </div>
         </div>
      )
   }
}
export default Main