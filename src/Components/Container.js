import React, { Component } from 'react';
import Image from './Image';
import ImagesList from './ImagesList.json';
import './container.css';


const imagesList = ImagesList;
class Container extends Component {

    state = {
        imagesList,
        total: 0
    }

    handleClick = id => {
        const getId = this.state.imagesList.filter(pic => pic.id === id);
        const result = getId[0].id;
        console.log(getId);
        this.setState({ result });
        const test = (this.state.result === result) ? alert('Try again!', this.setState({ total: 0 }))
            : this.setState(oldState => ({ total: oldState.total + 1 }));
        ;

        console.log(this.state.total);
    }

    render() {

        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        let imagesShuffle = this.state.imagesList;
        let newImage = shuffle(imagesShuffle);

        return (
            <div>
                <h2 className='score'>Score :{this.state.total}</h2>
                <div className='photos-container'>
                    {newImage.map(images => (
                        <Image
                            handleClick={this.handleClick}
                            id={images.id}
                            url={images.url}
                        />))}
                </div>
                <hr/>
                <p className='footer'>Willam Navas 2019</p>
            </div>
        )
    }
}
export default Container;