//包含了所有的action creator(action的工厂函数)
//同步的action返回的是一个对象
//异步的action返回的是一个函数
import {DECREMENT, INCREMENT} from './action-types' 

export const increment = (number) => ({type: INCREMENT, data: number});
export const decrement = (number) => ({type: DECREMENT, data: number});

//异步action
export const incrementAsync = (number) => {
    return dispatch =>{
        setTimeout(() => {
            dispatch(increment(number));
        }, 1000);
    }
}
