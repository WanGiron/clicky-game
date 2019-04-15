import React, { Component } from 'react';


function Image(props) {
    return <div className='div-image'>
        <img src={props.url} className='card photos animated zoomIn' onClick={()=>props.handleClick(props.id)}></img>
    </div>
}

export default Image;