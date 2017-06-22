/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';
import {NavigationTab} from '../shared/navigation_tab'
import {Chat} from '../chat/chat_interface'
import Resister from './resister'
import {Searcher} from './searcher'
import {
  BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter
} from 'react-router-dom'

// child component of Console
export class TaskManagerConsole extends Component {

    state = {
        clickedID: 'search',
    };

    changeTab(v) {

        this.setState({
            clickedID: v
        })
    }

    render() {
        const {navigationBarWidth, taskListUpdater} = this.props;

        //for props
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

        //for dynamic styling
        const styles = {
            container: {
                paddingLeft: navigationBarWidth,
                height: '100%',
                backgroundColor: 'white',

            }
        };

        return <div style={styles.container}>

            <NavigationTab
                changeTab={this.changeTab.bind(this)}
                innerNavigatorBarProps={innerNavigatorBarProps}
                {...this.state}/>

            <Switcher clickedID={this.state.clickedID} {...this.props}/>

        </div>
    }
}


const Switcher = (props) => {

    if(props.clickedID === 'resister') alert('you want to leave here?')

    switch (props.clickedID) {
        case 'search':
            return <Searcher {...props}/>;
        case 'chat':
            return <Chat {...props}/>;
        case 'resister':
            return <Resister {...props}/>;
        case 'log':
            return <Chat {...props}/>;

    }
};

