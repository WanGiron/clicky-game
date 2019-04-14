import React, { Component } from 'react';


function Image(props) {
    return <div className='div-image'>
        <img src={props.url} className='photos card'></img>
    </div>
}

export default Image;