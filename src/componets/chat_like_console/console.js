import React, {Component} from 'react';
import './console.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {NavigationBar} from './navigation_bar/navigation_bar'
import {APIMarketConsole} from './task_app_marketplace/task_app_marketplace'
import {TaskManagerConsole} from './task_manager/task_manager'


//----------------------------------------//
// SWITCH CONSOLE BODY DEPENDS ON URL PATH

// IF NEW PATH IS ADDED , THIS FUNCTION HAS TO BE MODIFIED
// ADD COMPONENT WITH 'CASE'
//----------------------------------------//

let ConsoleSwitcher = (props) => {
    let {path} = props;

    switch (path) {
        case 'tasks':
            return <TaskManagerConsole {...props}/>;
        // case 'navi':
        //     return <NaviConsole {...props}/>;
        case 'apiMarket':
            return <APIMarketConsole {...props}/>;
        default:
            return <div>aaa</div>

    }
};


export class ConsoleContainer extends Component {
    constructor() {
        super();
        this.state = {
            consoleState: true,
        }
    }

    onShowHandler() {
        this.setState({consoleState: !this.state.consoleState})

    }

    render() {

        const {consoleWidth, path} = this.props;
        const {consoleState} = this.state;

        // for a dynamic style
        const styles = {
            navigationBarWidth: 25,
            defaultInputStyle:{
                bottom:0,
                display:'flex',
                position:'fixed',
                paddingBottom:0,
                backgroundColor:'white'
            },

            show: {
                width: consoleWidth,
                right: 0
            },

            hidden: {
                width: consoleWidth,
                right: -consoleWidth + 25
            }
        };


        return (
            <div
                style={consoleState ? styles.show : styles.hidden }
                className="console-container"
            >
                <NavigationBar
                    navigationBarWidth={styles.navigationBarWidth}
                    onShowHandler={this.onShowHandler.bind(this)}/>
                <ConsoleSwitcher
                    navigationBarWidth={styles.navigationBarWidth}
                    defaultInputStyle={styles.defaultInputStyle}
                    {...this.state}
                    {...this.props}
                    path={path}/>
            </div>
        )
    }
}
