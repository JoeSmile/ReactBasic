const ReactDOM = require('react-dom');
const React = require('react');
const {Component} = require('react');
const $ = require('jquery');

let Introduction = React.createClass({
    render(){
        return (
               <div className = 'introduction'>
                   <nav>本文系列翻译 react-router 广发文档。用于纪录分享 react-router 学习历程。</nav>
                   <header>
                       <h1>Introducion</h1>
                   </header>
                   <session>
                       <p>不使用 React Router 时，代码是这样写滴(直接贴图了,,,)</p>
                       <div className='withoutReactRouter'></div>
                    </session>
               </div>
        );
    }
});
export default Introduction;
