import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class Index extends React.Component{
    // static propTypes = {
    //     counter: PropTypes.string.isRequired
    // }

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
                        <Link to='/taskList'>taskList</Link>
                    </Col>
                    <Col span={8}>
                        <Link to='/counter'>counter</Link>
                    </Col>
                </Row>
                <div>
                    
                </div>
            </div>
        )
    } 
}