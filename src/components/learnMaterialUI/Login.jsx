const ReactDOM = require('react-dom');
const React = require('react');
const {Component} = require('react');
const $ = require('jquery');

let Login = React.createClass({

    getInitialState: function () {
        return {

        };
    },

    render(){
        return (
               <div className='Login'>
                    This is Login Page
               </div>
        );
    }
});
export default Login;
