const ReactDOM = require('react-dom');
const React = require('react');
const {Component} = require('react');
const $ = require('jquery');
const { Link } = require('react-router')
import Introduction from './doc/Introduction';

export default class LearnReactRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    /*
     * 根据路由选择渲染的章节
    **/
    showWhich(){
        let pageIndex = this.props.pageIndex || 1;
        let ret;
        switch (pageIndex) {
            case 1:
                ret = <Introduction />;
                break;

            default:
                break;
        }
        return ret;
    }

    /*
     * 生成左侧目录结构 懒办法
    **/
    renderTableOfContents(){
        return <ul className='tableOfContents'>
                    <li>{'Introduction'}</li>
                    <li>{'Basics'}</li>
                        <ul className='subUl'>
                            <li>{'Route Configuration'}</li>
                            <li>{'Route Matching'}</li>
                            <li>{'Histories'}</li>
                            <li>{'Index Routes and Links'}</li>
                        </ul>
                    <li>{'Advanced Usage'}</li>
                        <ul className='subUl'>
                            <li>{'Dynamic Routing'}</li>
                            <li>{'Confirming Navigation'}</li>
                            <li>{'Server Rendering'}</li>
                            <li>{'Component Lifecycle'}</li>
                            <li>{'Navigating Outside of Components'}</li>
                        </ul>
                    <li>{'Change Log'}</li>
                    <li>{'Troubleshooting'}</li>
                    <li>{'API'}</li>
                    <li>{'Glossary'}</li>
               </ul>
    }

    render(){
        let content = this.renderTableOfContents();
        let aticle = this.showWhich();
        return (
               <div className = 'LearnReactRouter'>
                   <div className = 'nav'>
                       {content}
                   </div>
                   <div className = 'aticle'>
                        {aticle}
                   </div>
               </div>
        );
    }
}
