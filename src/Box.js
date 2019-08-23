import React from 'react'

const Box = props =>{
    return(
      <div className = {props.className}>
        {props.content}
      </div>
    )
  }

  export default Box