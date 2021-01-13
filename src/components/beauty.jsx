import React from 'react';

import { PageHeader } from 'antd';

import Pic from '../components/pic'

import '../assets/css/pic.css';

export default class Beauty extends React.Component{
    state = {
    }

    componentDidMount(){
    }


    handleback = () => {
        this.props.history.goBack();
    }

    render(){
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => this.handleback()}
                    title="Beauty"
                    subTitle=""
                />
                <Pic />
            </div>
        )
    } 
}