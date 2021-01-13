import React from 'react';
import axios from 'axios';

import { Spin } from 'antd';

import '../assets/css/pic.css';

export default class Pic extends React.Component{
    state = {
        imgSrc:"",
        imgLoading: false
    }

    componentDidMount(){
        this.getPic();
    }

    handleImgLoadState(){
        this.setState({
            imgLoading: false
        })
    }
    getPic() {
        this.setState({
            imgLoading: true
        })
        axios.get('https://www.hongzhulp.online:8446/getPic').then((res)=>{
            this.setState({
                imgSrc: res.data.pic_url
            })
        })
    }

    render(){
        const { imgSrc } = this.state;
        return (
            <div>
                <Spin style={{display: this.state.imgLoading? 'block':'none' }} />
                <img src={imgSrc} 
                    className='img' 
                    alt="" 
                    onClick={()=>this.getPic()}
                    onLoad={()=>this.handleImgLoadState()}
                    style={{display: this.state.imgLoading? 'none':'block'}}
                />
            </div>
        )
    } 
}