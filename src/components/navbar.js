import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";
import './navbar.css';

function navbar (){
  return (
    
        <div className="App">
                <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/about">About</Link> 
                </li>
                </ul>
        </div>
    
    
  )
}

{const Block = styled.div`
background: papayawhip;
`;

const Ulist = styled.ul`
font-size: 20px;
list-style-type: none;
margin: 0;
padding: 0;
text-align: left;
`;
}
export default navbar