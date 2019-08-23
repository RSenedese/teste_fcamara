import React from 'react'

const TextHolder = props => {
    var textList = props.content.map(function(text,index){
                    return <p key ={index}>{text}</p>;
                  })
  
    return  <div className = {props.className}>{ textList }</div>
  }

  export default TextHolder