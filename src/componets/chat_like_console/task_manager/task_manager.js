/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';
import './task_manager.css'
import {NavigationTab} from '../../shared_components/navigation_tab'
import {Chat} from '../../shared_components/chat_interface'
import {Searcher} from './searcher'


// child component of Console
export class TaskManagerConsole extends Component {

    state = {
        clickedID: 'search',
    }

    changeTab(v) {
        this.setState({
            clickedID: v
        })
    }

    render() {
        const {navigationBarWidth, taskListUpdater} = this.props;

        //for props
        const innerNavigatorBarProps = {
            tabs: 2, mapper: [
                {
                    id: 'chat',
                    text: 'CHAT'
                }, {
                    id: 'search',
                    text: 'SEARCH'
                },
            ]
        };

        //for dynamic styling
        const styles = {
            container: {
                paddingLeft: navigationBarWidth,
            }
        };

        return <div style={styles.container} className="task-manager container">

            <NavigationTab
                changeTab={this.changeTab.bind(this)}
                innerNavigatorBarProps={innerNavigatorBarProps}
                {...this.state}/>

            <Switcher clickedID={this.state.clickedID} {...this.props}/>
        </div>
    }
}

const Switcher = (props) => {
    switch (props.clickedID) {
        case 'search':
            return <Searcher {...props}/>;
        case 'chat':
            return <Chat {...props}/>;

    }
}

