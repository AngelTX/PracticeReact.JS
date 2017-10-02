import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';

const generateBlocks = ({blocks}) =>{
  if(blocks){
    return blocks.map((item)=>{
      return(
        <Reveal effect="animated fadeInUp">


        </Reveal>
      )
    })
  }
}
const Blocks = (props) =>{



  return(
    <div className="home_blocks">
      {generateBlocks(props)}
    </div>
  )
}

export default Blocks;
