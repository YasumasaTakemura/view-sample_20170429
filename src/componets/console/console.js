import React, {Component} from 'react';
import './console.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {NavigationBar} from './navigation_bar/navigation_bar'
import Deploy from './my_api/depoloy'
import {TaskManagerConsole} from './task_manager/task_manager'
import { CSSTransitionGroup } from 'react-transition-group'
import {
    BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink, withRouter
} from 'react-router-dom'

import {Chat} from './shared/chat_interface'
import {NavigationTab} from './shared/navigation_tab'
import Resister from './task_manager/resister'
import Searcher from './task_manager/searcher'

export class ConsoleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleState: this.props.consoleState ? this.props.consoleState : false,
        };

        this.navigationBarWidth =35;
        this.consoleWidth =this.props.consoleWidth ? this.props.consoleWidth : 300;
    }

    onShowHandler() {
        this.setState({consoleState: !this.state.consoleState})

    }

    render() {

        ////////////////////////////////////////
        // set variables
        ////////////////////////////////////////

        const innerNavigatorBarProps = {
            tabs: 2,
        };

        //JSON
        // in production, this replace with api data
        const tabProps = {
            tasks: [
                {
                    id: 'chat',
                    text: 'CHAT'
                }, {
                    id: 'search',
                    text: 'SEARCH'
                }, {
                    id: 'resister',
                    text: 'RESISTER'
                }, {
                    id: 'log',
                    text: 'LOG'
                },
            ], my_apps: [
                {
                    id: 'chat',
                    text: 'CHAT'
                }, {
                    id: 'search',
                    text: 'SEARCH'
                }, {
                    id: 'resister',
                    text: 'RESISTER'
                }, {
                    id: 'log',
                    text: 'LOG'
                },
            ], my_api: [
                {
                    id: 'chat',
                    text: 'CHAT'
                }, {
                    id: 'search',
                    text: 'SEARCH'
                }, {
                    id: 'deploy',
                    text: 'DEPLOY'
                }, {
                    id: 'log',
                    text: 'LOG'
                },
            ], marketplace: [
                {
                    id: 'chat',
                    text: 'CHAT'
                }, {
                    id: 'search',
                    text: 'SEARCH'
                }, {
                    id: 'resister',
                    text: 'RESISTER'
                }, {
                    id: 'log',
                    text: 'LOG'
                },
            ],
        };


        // const {consoleWidth,} = this.props;
        const {consoleState} = this.state;

        // bar width
        // if you change this number , the bandwidth of the navigation bar is changed
        const navigationBarWidth = this.navigationBarWidth;
        const consoleWidth = this.consoleWidth;

        const consoleWindowSize = consoleWidth - navigationBarWidth;


        // for a dynamic style
        const styles = {
            container: {

                paddingLeft: navigationBarWidth,
                height: '100%',
                backgroundColor: 'white',
                // paddingRight:10

            },
            navigationBarWidth: navigationBarWidth,
            defaultInputStyle: {
                bottom: 0,
                position: 'fixed',
                backgroundColor: 'white',
                width: consoleWindowSize// don't know why racio dose not work
            },

            show: {
                zIndex: 200,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
                width: consoleWidth,
                right: 0
            },

            hidden: {

                zIndex: 200,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
                width: consoleWidth,
                right: -consoleWidth + navigationBarWidth
            }
        };

        return (
            <div style={consoleState ? styles.show : styles.hidden }>

                <NavigationBar
                    consoleState={this.state.consoleState}
                    navigationBarWidth={styles.navigationBarWidth}
                    onShowHandler={this.onShowHandler.bind(this)}/>

                <Switcher
                    tabProps={tabProps}
                    styles={styles}
                    innerNavigatorBarProps={innerNavigatorBarProps}
                    consoleWindowSize={consoleWindowSize}
                    navigationBarWidth={styles.navigationBarWidth}
                    defaultInputStyle={styles.defaultInputStyle}
                    {...this.state}
                    {...this.props}
                />

            </div>
        )
    }
}

const Switcher = (props)=> {
    const {tabProps,location} = props;
    const path = location.pathname.split('/')[1];
    return <ConsoleContent tab={tabProps[path]} path={path} {...props}/>;
};


//----------------------------------------//
// SWITCH CONSOLE CONTENTS DEPENDS ON URL PATH

// IF NEW PATH IS ADDED , THIS FUNCTION HAS TO BE MODIFIED
// ADD COMPONENT WITH 'CASE'
//----------------------------------------//

function alertLeavingHere() {
    if(!confirm('leave here?')) return null
}

const ConsoleContent = (props) => {
    const {innerNavigatorBarProps, styles, tab} = props;

    return <div style={styles.container}>

        <NavigationTab innerNavigatorBarProps={innerNavigatorBarProps} tab={tab} {...props}/>
        <Switch>
            <Route exact path='/tasks/search' render={()=><Searcher {...props}/>}/>
            <Route exact path='/tasks/chat' render={()=><Chat {...props}/>}/>
            <Route exact path='/tasks/resister' render={()=><Resister {...props}/>}/>
            <Route exact path='/marketplace/resister' render={()=><Chat {...props}/>}/>
            <Route exact path='/my_api/deploy' render={()=><Deploy {...props}/>}/>
            <Route path='/' render={()=><div> not contents </div>}/>
        </Switch>
    </div>;

};
