import React from 'react'

const BoxHolder = props =>{
    var boxList = props.content.map(function(box, index){
      return box
    })
  
    return  <div className = {props.className}>{ boxList }</div>
    
  }

  export default BoxHolder