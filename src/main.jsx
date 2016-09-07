const ReactDOM = require('react-dom');
const React = require('react');
const { Component } = require('react');
const $ = require('jquery');
const { Router, Route, hashHistory, Link, IndexLink ,IndexRoute} = require('react-router')

// import MainPage from './components/index';
import LearnES6 from './components/learnES6/index';
import LearnReact from './components/learnReact/index';
import LearnElectron from './components/learnElectron/index';
import LearnMaterialUI from './components/learnMaterialUI/index';
import LearnReactRouter from './components/learnReactRouter/index';

let lessonNames = ['React','ES6','Electron','MaterialUI','ReactRouter'];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseCourse:'HomePage'
        }
    }

    /**
     * 批量绑定 this 上下文到事件调用的方法
     ＊ 在构造函数中调用
     */
    _bind(...methods){
        methods.forEach( (method)=> this[method] = this[method].bind(this));
    }

    /**
     *  @param  course 传入选中的课程
     */
    chooseCourse(course){
        this.setState({
            chooseCourse:course
        })
    }

    /**
     * render 首页
     */
    renderHomePage(){
        let areas = lessonNames.map((item,index)=>{
            return  <div className='area'>
                        <div className='area_content'>
                            <div className={item+'_logo'} key={item+'_logo'}>
                                <Link to={'/'+item}></Link>
                                <div className='name'><Link to={'/'+item}>{item}</Link></div>
                            </div>
                        </div>
                    </div>
        });

        return  <div className='HomePage'>
                    {areas}
                </div>
    }

    /**
     * render Header
     */
    renderHeader(){
        let lis = lessonNames.map((item,index)=>{
             return <li key={'Header'+item}><Link to={'/'+item}>{item}</Link></li>
        });

        return <div className='Header'>
                    <ul>
                        <li><IndexLink to='/'>HomePage</IndexLink></li>
                        {lis}
                    </ul>
               </div>
    }

    /**
     * render Page
     */
    renderCoursePage(){
        let ret,content,head;
        switch (this.props.location.pathname) {
            case '/React':
                ret = <LearnReact />;
                break;
            case '/ES6':
                ret = <LearnES6 />;
                break;
            case '/Electron':
                ret = <LearnElectron />;
                break;
            case '/MaterialUI':
                ret = <LearnMaterialUI />;
                break;
            case '/ReactRouter':
                ret = <LearnReactRouter />;
                break;
            case '/HomePage':
            default:
                return this.renderHomePage();
        }
        head = this.renderHeader();
        content = <div className='content'>
                         {ret}
                      </div>;
        return [head,content];
    }

    render(){

        return (
            <div className='App'>
                { this.renderCoursePage() }
            </div>
        );
    }
}
let routes = <Route path='/' component={App}>
                <Route path='/React' component={LearnReact}/>
                <Route path='/ES6' component={LearnES6}/>
                <Route path='/Electron' component={LearnElectron}/>
                <Route path='/MaterialUI' component={LearnMaterialUI}/>
                <Route path='/ReactRouter' component={LearnReactRouter}/>
                <Route path='/HomePage' component={App} />
            </Route>;

ReactDOM.render(
    <Router routes={routes} history={hashHistory}/>,
    document.getElementById('app')
);
