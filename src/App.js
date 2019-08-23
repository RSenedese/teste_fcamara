import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import './style.css'
import Box from'./Box'
import TextHolder from './TextHolder'
import BoxHolder from './BoxHolder'


function App() {

  const mediaQuery500 = useMediaPredicate('(min-width: 500px)');

  return (
    <div className='App'>

    {mediaQuery500?
      <Box className = 'blueBox'
        content = {<Box
                    className = 'greyBox'
                    content = {[
                      <TextHolder key ={'holder1'} className = {'flex-container flex-text'} content = {['Hello word!', 'Good morning.']}/>,
                      <BoxHolder key ={'holder2'} className = {'flex-container flex-div'} content = {[                                          
                        <Box key = {'box3'} className = {'greenBox'} content = {<TextHolder content = {['Hello strange! Bye bye.']}/>}/>,
                        <Box key = {'box4'} className = {'transparentBox'} content = {<TextHolder content = {['Good night.']}/>}/>,
                      ]}/>,
                      <TextHolder key ={'holder3'} className = {'flex-text bottomText'} content = {['Hello box!']}/>
                    ]}
                />}
/>:
<Box className = 'greyBox'
            content = {[
              <TextHolder key ={'holder1'} className = {'flex-container flex-text'} content = {['Hello word!', 'Good morning.']}/>,
              <BoxHolder content = {[<Box className = {'blueBox'} content = {<TextHolder content = {['Good night.']}/>}/>]}/>,
              <TextHolder key ={'holder2'} className = 'bottomText' content = {['Hello strange! Bye bye.']}/>
            ]}
        />}
    </div>
  );
}

export default App;
