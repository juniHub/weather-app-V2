import React from 'react';

import App from './containers/App/App';
import classes from './containers/App/App.module.css';

import styled from "@emotion/styled";
import { useTheme } from "./Theme/ThemeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  overflow: auto;
 `;

const Main = () =>
{
    const themeState = useTheme();

    return (

      <Wrapper>
      <div className={classes.AppWrapper}>
    
          
        <header className={classes.Header}>
            
        <h1 className="">
            <img src="https://img.icons8.com/doodle/48/000000/apple-weather.png" alt="weather forecast"/>
            </h1>
            
            <button aria-label="Left Align" aria-hidden="true" className={ classes.themeBtn } onClick={() => themeState.toggle()}>
      
        {themeState.dark ?   
         <i className="fas fa-adjust"></i>
        
        :  <i className="fas fa-adjust"></i>}
        </button>
       
        </header>
    
      
       

          <App />

      </div>
      </Wrapper>
    )
}

export default Main