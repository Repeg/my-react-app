import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class Pic extends React.Component{
    state = {
    }

    componentDidMount(){
    }

    render(){
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Link to='/beauty'>beauty</Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/covid'>covid</Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/IWant2See'>IWant2See</Link>
                    </Col>
                </Row>
                <div>
                </div>
            </div>
        )
    } 
}