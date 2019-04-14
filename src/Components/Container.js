import React, { Component } from 'react';
import Image from './Image';
import ImagesList from './ImagesList.json';
import './container.css'

class Container extends Component {
    state = {
        ImagesList
    }
    render() {
        return (
            <div className='photos-container'>
                {this.state.ImagesList.map( ImagesList => (
                <Image
                id={ImagesList.id}
                url={ImagesList.url}
                />))}
            </div>
        )
    }
}
export default Container;