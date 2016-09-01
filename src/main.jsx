const ReactDOM = require('react-dom');
const React = require('react');
const { Component } = require('react');
const $ = require('jquery');
import MainPage from './components/index';

export default class App extends Component {
    constructor(props) {
        super(props);
        // this._bind('selectMajor');
        this.state = {
        }
    }

    /**
     * 批量绑定 this 上下文到事件调用的方法
     ＊ 在构造函数中调用
     */
    _bind(...methods){
        methods.forEach( (method)=> this[method] = this[method].bind(this));
    }

    render(){
        return (
            <div className='App'>
                <MainPage />
            </div>
        );
    }
}



ReactDOM.render(
    <App /> ,
    document.getElementById('app')
);
