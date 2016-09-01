const ReactDOM = require('react-dom');
const React = require('react');
const {Component} = require('react');
const $ = require('jquery');
const Login = require('./Login');
const Register = require('./Register');

let FristPage = React.createClass({

    getInitialState: function () {
        return {
            pageId:'Home'
        };
    },

    show(){
        let page;
        switch (this.state.pageId) {
            case 'Home':
                page = <div className = 'homePage'>This is HomePage</div>;
                break;
            case 'Login':
                page = <Login />;
                break;
            case 'Register':
                page = <Register />;
                break;
            default:
                page = <Login />;
                break;
        }
        return page;
    },

    choosePage(param){
        this.setState({
            pageId:param
        })
    },

    render(){
        let showPage = this.show();
        return (
               <div className = 'FristPage'>
                   <div className = 'navLeft'>
                       <ul className = "nav-tabs">
                         <li role = "presentation" className = "active"><a onClick = {this.choosePage.bind(this,'Home')}>Home</a></li>
                         <li role = "presentation"><a onClick = {this.choosePage.bind(this,'Login')}>Login</a></li>
                         <li role = "presentation"><a onClick = {this.choosePage.bind(this,'Register')}>Register</a></li>
                       </ul>
                   </div>
                   <div className = "contentPage">
                       {showPage}
                   </div>
               </div>
        );
    }
});
export default FristPage;
