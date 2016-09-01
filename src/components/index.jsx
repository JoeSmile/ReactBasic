const ReactDOM = require('react-dom');
const React = require('react');
const { Component } = require('react');
const $ = require('jquery');

const FristPage = require('./FristPage/index');

let MainPage = React.createClass({

    getInitialState: function () {
        return {

        };
    },

    render(){
        return (
               <div className='MainPage'>
                    <FristPage />
               </div>
        );
    }
});
export default MainPage;
