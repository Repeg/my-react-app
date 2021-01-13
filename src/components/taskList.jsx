import React from 'react';
// import {withRouter} from 'react-router-dom';

import { PageHeader, Button  } from 'antd';
// import Axios from 'axios';

export default class TaskList extends React.Component{
    state = {
    }

    componentDidMount(){
        // Axios.get("https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoforeignList").then((res)=>{
        //     console.log(res.data.data);
        // })
    }

    handleback = () => {
        this.props.history.goBack();
    }

    addTask = () =>{
        this.props.history.push("/addTask");
    }

    render(){
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => this.handleback()}
                    title="IWant2See"
                    subTitle=""
                />
                <Button type="primary" onClick={()=>this.addTask()}>add Task</Button>
            </div>
        )
    } 
}