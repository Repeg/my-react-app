import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select, PageHeader } from 'antd';

const { Option } = Select;

export default class Counter extends React.Component{
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    state = {
        selectValue: 0
    }

    componentDidMount(){
    }

    handleChange = (value) => {
        const selectValue = value;
        this.setState({selectValue});
    }

    increment = () =>{
        const number = this.state.selectValue * 1;
        // this.props.store.dispatch({type: INCREMENT, data: number});
        // this.props.store.dispatch(actions.increment(number));
        this.props.increment(number);

        // const count = this.state.count;
        // this.setState({count: count + number});
    }

    decrement = () =>{
        const number = this.state.selectValue * 1;
        // const count = this.state.count;
        // this.setState({count: count - number});
        // this.props.store.dispatch({type: DECREMENT, data: number});
        // this.props.store.dispatch(actions.decrement(number));
        this.props.decrement(number);
    }

    incrementIfOdd = () =>{
        const number = this.state.selectValue * 1;
        // const count = this.state.count;
        // if(count % 2 == 1){
        //     this.setState({count: count + number});
        // }
        const {count} = this.props;
        if(count % 2 == 1){
            // this.props.store.dispatch({type: INCREMENT, data: number});
            // this.props.store.dispatch(actions.increment(number));
            this.props.increment(number);
        }
    }

    incrementAsync = () =>{
        const number = this.state.selectValue * 1;
        // const count = this.state.count;
        // setTimeout(() => {
        //     // this.props.store.dispatch({type: INCREMENT, data: number});
        //     // this.props.store.dispatch(actions.increment(number));
        //     this.props.increment(number);
        // }, 1000);
        this.props.incrementAsync(number);
    }

    handleback = () => {
        this.props.history.goBack();
    }

    render(){
        const {count} = this.props;
        // const count = this.props.store.getState();
        // const { count } = this.state;
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => this.handleback()}
                    title="counter"
                    subTitle=""
                />
                <br />
                <p>click {count} times</p>
                <div>
                    <Select className='select_position' onChange={this.handleChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>&nbsp;<br />
                <br />
                <br />
                    <Button onClick={this.increment}>+</Button>&nbsp;
                    <Button onClick={this.decrement}>-</Button>&nbsp;
                    <Button onClick={this.incrementIfOdd}>increment if odd</Button>&nbsp;
                    <Button onClick={this.incrementAsync}>increment async</Button>
                </div>
            </div>
        )
    } 
};
