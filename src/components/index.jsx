const ReactDOM = require('react-dom');
// const React = require('react');
const { Component } = require('react');
const $ = require('jquery');
import React from 'react';

const LearnES6 = require('./learnES6/index');
const LearnReact = require('./learnReact/index');
const LearnElectron = require('./learnElectron/index');
const LearnMaterialUI = require('./learnMaterialUI/index');

let MainPage = React.createClass({
    getInitialState: function () {
        return {
            chooseCourse:'HomePage'
        };
    },

    chooseCourse(course){
        this.setState({
            chooseCourse:course
        })
    },

    renderHomePage(){
        return  <div className='HomePage'>
                    <div className='area'>
                        <div className='react_log' onClick={this.chooseCourse.bind(this,'React')}>React</div>
                    </div>
                    <div className='area'>
                        <div className='es6_logo' onClick={this.chooseCourse.bind(this,'ES6')}>ES6</div>
                    </div>
                    <div className='area'>
                        <div className='electron_logo' onClick={this.chooseCourse.bind(this,'Eletron')}>Eletron</div>
                    </div>
                    <div className='area'>
                        <div className='materialui_logo' onClick={this.chooseCourse.bind(this,'MaterialUI')}>MaterialUI</div>
                    </div>
                </div>
    },

    renderHeader(){
        return <div className='Header'>
                    <ul>
                        <li onClick={this.chooseCourse.bind(this,'HomePage') }>HomePage</li>
                        <li onClick={this.chooseCourse.bind(this,'React') }>React</li>
                        <li onClick={this.chooseCourse.bind(this,'ES6') }>ES6</li>
                        <li onClick={this.chooseCourse.bind(this,'Eletron') }>Eletron</li>
                        <li onClick={this.chooseCourse.bind(this,'MaterialUI') }>MaterialUI</li>
                    </ul>
               </div>
    },

    renderCoursePage(){
        let ret;
        switch (this.state.chooseCourse) {
            case 'React':
                ret = <div className='content'>
                        <LearnReact />
                      </div>;
                break;
            case 'ES6':
                ret = <div className='content'>
                        <LearnES6 />
                      </div>;
                break;
            case 'Eletron':
                ret = <div className='content'>
                        <LearnElectron />
                      </div>;
                break;
            case 'MaterialUI':
                ret = <div className='content'>
                        <LearnMaterialUI />
                      </div>;
                break;
            default:
                ret = this.renderHomePage();
                break;
        }
        let head = this.renderHeader();
        return [head,ret];
    },

    render(){
        let showPage = this.state.chooseCourse == 'HomePage' ? this.renderHomePage() : this.renderCoursePage();
        return (
               <div className='MainPage'>
                   {showPage}
               </div>
        );
    }
});
export default MainPage;
