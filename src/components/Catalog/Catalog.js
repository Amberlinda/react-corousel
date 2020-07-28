import React, { Component } from 'react';
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle } from 'react-icons/ai';
import Image1 from '../../assets/img/img-1.jpg';
import Image2 from '../../assets/img/img-2.jpg';
import Image3 from '../../assets/img/img-3.jpg';
import Image4 from '../../assets/img/img-4.jpg';

import css from './Catalog.module.css';

class Catalog extends Component {

    state = {
        position: 0,
        images : [Image1,Image2,Image3,Image4],
        checked: false
    };

    clickNavigationHandler = (type = 'next', checkedState = this.state.checked) => {
        const updatedState = {...this.state};
        switch(type){
            case 'prev':
                console.log('handler');
                if(updatedState.position === 0){
                    updatedState.position = updatedState.images.length-1;
                }
                else{
                    updatedState.position -= 1;
                }
                break;
            case 'next':
                if(updatedState.position === updatedState.images.length-1){
                    updatedState.position = 0;
                }
                else{
                    updatedState.position += 1;
                }
                break;
            default:
                updatedState.position = 0;
        }
        this.setState(updatedState);
    }

    slideHandler = (event) => {
        const updatedState = {...this.state};
        if(event.target.checked){
            updatedState.checked = true;
        }
        updatedState.checked = false;
        this.setState(updatedState);
    }

    render(){
        return(
            <div className={css.Catalog}>
                <ul className={css.CatalogFlex}>
                    <li className={css.Prev} onClick = {() => this.clickNavigationHandler('prev')}><AiFillLeftCircle className={css.Icon}/></li>
                    <li className={css.Image}>
                        <div>
                            <img src={this.state.images[this.state.position]}/>
                        </div>
                    </li>
                    <li className={css.Next} onClick = {() => this.clickNavigationHandler('next')}><AiFillRightCircle className={css.Icon}/></li>
                </ul>
                <div className={css.Slide}>
                    <input type = 'checkbox' onChange = {(event) => this.slideHandler(event)}/>
                    <label>slide</label>
                </div>
            </div>
        );
    }
}

export default Catalog;