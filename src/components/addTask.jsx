import React from 'react';

import { PageHeader, Input, Button } from 'antd';
import { Link } from "react-router-dom";

export default class AddTask extends React.Component{
    state = {
        taskName: '',
        taskDesc: '',
        point: 0
    }

    componentDidMount(){
        
    }

    handleback = () => {
        this.props.history.goBack();
    }
    taskDescChange = (event) => {
        this.setState({taskDesc: event.target.value});
    }
    taskNameChange = (event) => {
        this.setState({taskName: event.target.value});
    }
    taskPointChange = (event) => {
        this.setState({point: event.target.value});
    }

    submitInfo = () => {
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => this.handleback()}
                    title="add task"
                    subTitle=""
                />
                <Input addonBefore="Task Name" addonAfter="" defaultValue="" value={this.state.taskName} onChange={this.taskNameChange} placeholder="please input task name" />
                <Input addonBefore="Task desc" addonAfter="" defaultValue="" value={this.state.taskDesc} onChange={this.taskDescChange} placeholder="please input task desc" />
                <Input addonBefore="Point" addonAfter="" defaultValue="" value={this.state.point} onChange={this.taskPointChange} type="number" placeholder="please input point" />
                <Button type="primary" onClick={this.submitInfo}>submit</Button>
                <Link to="/taskList"><Button>cancel</Button></Link>
            </div>
        )
    } 
}