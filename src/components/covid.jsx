import React from 'react';

import { PageHeader } from 'antd';
import Axios from 'axios';

export default class Covid extends React.Component{
    state = {
    }

    componentDidMount(){
        Axios.get("https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoforeignList").then((res)=>{
            console.log(res.data.data);
        })
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
                    title="Covid"
                    subTitle=""
                />
            </div>
        )
    } 
}