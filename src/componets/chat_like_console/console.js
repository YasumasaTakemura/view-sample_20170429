import React, {Component} from 'react';
import './console.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {NavigationBar} from './navigation_bar/navigation_bar'
import {APIMarketConsole} from './task_app_marketplace/task_app_marketplace'
import {TaskManagerConsole} from './task_manager/task_manager'

import {
  BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter
} from 'react-router-dom'

import {Chat} from './shared/chat_interface'
import {NavigationTab} from './shared/navigation_tab'
import Resister from '../chat_like_console/task_manager/resister'
import {Searcher} from '../../componets/chat_like_console/task_manager/searcher'

export class ConsoleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            consoleState: this.props.consoleState? this.props.consoleState:false,
        };
    }

    onShowHandler() {
        this.setState({consoleState: !this.state.consoleState})

    }

    render() {
        const innerNavigatorBarProps = {
            tabs: 2,
            mapper: [
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
            ]
        };

        const {consoleWidth, } = this.props;
        const {consoleState} = this.state;

        // bar width
        // if you change this number , the bandwidth of the navigation bar is changed
        const navigationBarWidth = 35;


        //validate 'consoleWidth'
        let _consoleWidth = consoleWidth;
        if (consoleWidth === undefined) _consoleWidth = 300;

        // for a dynamic style
        const styles = {
             container: {
                paddingLeft: navigationBarWidth,
                height: '100%',
                backgroundColor: 'white',

            },
            navigationBarWidth: navigationBarWidth,
            consoleContainer: {
                zIndex: 100,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
            },
            defaultInputStyle: {
                bottom: 0,
                display: 'flex',
                position: 'fixed',
                padding: 0,
                margin: 0,
                backgroundColor: 'white',
                width:consoleWidth * 0.9// don't know why racio dose not work
                // width:'80%',
                // right:0
            },

            show: {
                zIndex: 200,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
                width: _consoleWidth,
                right: 0
            },

            hidden: {
                zIndex: 200,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
                width: _consoleWidth,
                right: -_consoleWidth + navigationBarWidth
            }
        };

        return (
            <div style={consoleState ? styles.show : styles.hidden }>
                    <NavigationBar
                        consoleState={this.state.consoleState}
                        navigationBarWidth={styles.navigationBarWidth}
                        onShowHandler={this.onShowHandler.bind(this)}/>

                    <ConsoleSwitcher
                        styles={styles}
                        innerNavigatorBarProps={innerNavigatorBarProps}
                        navigationBarWidth={styles.navigationBarWidth}
                        defaultInputStyle={styles.defaultInputStyle}
                        {...this.state}
                        {...this.props}
                        path={this.path}/>
                </div>
        )
    }
}

//----------------------------------------//
// SWITCH CONSOLE BODY DEPENDS ON URL PATH

// IF NEW PATH IS ADDED , THIS FUNCTION HAS TO BE MODIFIED
// ADD COMPONENT WITH 'CASE'
//----------------------------------------//

 const ConsoleSwitcher = (props) => {
    let {innerNavigatorBarProps,styles} = props;
    return <div style={styles.container}>
        <NavigationTab innerNavigatorBarProps={innerNavigatorBarProps} {...props}/>
        <Switch>
            <Route path='/tasks/search' render={()=><Searcher {...props}/>}/>
            <Route path='/tasks/chat' render={()=><Chat {...props}/>}/>
            <Route path='/tasks/resister' render={()=><Resister {...props}/>}/>
            <Route path='/marketplace/resister' render={()=><Chat {...props}/>}/>
        </Switch>
        </div>;

};
