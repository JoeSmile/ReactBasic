const ReactDOM = require('react-dom');
const React = require('react');
const {Component} = require('react');
const $ = require('jquery');


let fileContent = ` import React from &apos;react&apos;
                    import { render } from &apos;react-dom&apos;

                    const About = React.createClass({\/*...*\/})
                    const Inbox = React.createClass({\/*...*\/})
                    const Home = React.createClass({\/*...*\/})

                    const App = React.createClass({
                      getInitialState() {
                        return {
                          route: window.location.hash.substr(1)
                        }
                      },

                      componentDidMount() {
                        window.addEventListener(&apos;hashchange&apos;, () =&gt; {
                          this.setState({
                            route: window.location.hash.substr(1)
                          })
                        })
                      },

                      render() {
                        let Child
                        switch (this.state.route) {
                          case &apos;\/about&apos;: Child = About; break;
                          case &apos;\/inbox&apos;: Child = Inbox; break;
                          default:      Child = Home;
                        }

                        return (
                          &lt;div&gt;
                            &lt;h1&gt;App&lt;\/h1&gt;
                            &lt;ul&gt;
                              &lt;li&gt;&lt;a href=&quot;#\/about&quot;&gt;About&lt;\/a&gt;&lt;\/li&gt;
                              &lt;li&gt;&lt;a href=&quot;#\/inbox&quot;&gt;Inbox&lt;\/a&gt;&lt;\/li&gt;
                            &lt;\/ul&gt;
                            &lt;Child\/&gt;
                          &lt;\/div&gt;
                        )
                      }
                    })

                    render(&lt;App \/&gt;, document.body)`


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
                      <pre>
                          {fileContent}
                      </pre>
                    </session>
               </div>
        );
    }
});
export default Introduction;
