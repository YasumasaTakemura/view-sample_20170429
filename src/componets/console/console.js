/**
 * Created by YasumasaTakemura on 2017/05/29.
 */

import React, {Component} from 'react';
import './console_components.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {NavigationBar} from '../navigationBar/navigationBar'
import {Sticky} from '../shared_components/shared_components'
import {APIMarketConsole} from './api_market/api_market'
import {TaskListSearcher, NaviConsole} from './task_manager/task_manager'


//----------------------------------------//
// SWITCH CONSOLE BODY DEPENDS ON URL PATH

// IF NEW PATH IS ADDED , THIS FUNCTION HAS TO BE MODIFIED
// ADD COMPONENT WITH 'CASE'
//----------------------------------------//

let ConsoleSwitcher = (props) => {
    let {path,} = props;

    switch (path) {
        case 'tasks':
            return <TaskListSearcher {...props}/>;
        case 'navi':
            return <NaviConsole {...props}/>;
        case 'apiMarket':
            return <APIMarketConsole {...props}/>;
        default:
            return <div>aaa</div>

    }
};



export let ConsoleContainerSwitcher = (props) => {
    return props.sticky ? <StickyConsoleContainer {...props}/> : <DraggableConsoleContainer {...props}/>;
};

class StickyConsoleContainer extends Component {

    render() {
        let {component, label} = this.props
        return (
            <div className="draggable console-container">
                <ConsoleContainer
                    width={800}
                    height={150}
                    {...this.props}
                >
                    <NavigationBar/>
                    <ConsoleSwitcher {...this.state} {...this.props} label={label} component={component}/>
                </ConsoleContainer>
            </div>
        )
    }
}

class DraggableConsoleContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <Draggable
                // axis="x"
                // onDrag={this.onDrag}
                // onStop={this.onStop}
                // onDrag={() => console.log('......')}
                handle=".draggable"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[1, 1]}
            >
                <div className="draggable console-container">
                    <ConsoleContainer
                        width={800}
                        height={150}
                        open={this.props.open}
                        toggleOpen={this.props.toggleOpen.bind(this)}
                    >
                        <NavigationBar/>

                        <ConsoleSwitcher
                            path={this.props.path}
                            taskListUpdater={this.props.taskListUpdater}
                            taskLogUpdater={this.props.searchUpdatedForMessages}
                            input={this.props.input}
                            data={this.props.data}
                        >
                        </ConsoleSwitcher>
                    </ConsoleContainer>
                </div>
            </Draggable>
        )
    }
}


class ConsoleContainer extends Component {

    // default value for container size
    width = 800;
    height = 150;

    validateProps() {
        // validate props , if not passed value, set default value
        if (this.props.width === undefined) this.width
        if (this.props.height === undefined) this.height
        this.width = this.props.width;
        this.height = this.props.height;
    }

    render() {

        this.validateProps();
        if (this.props.open)return <OpenedConsole {...this.props}/>;
        return <ClosedConsole {...this.props}/>

    }
}

class OpenedConsole extends Component {
    render() {
        return <div className="console-container opening">
            <div className="console-container-body">
                <label className="console-container-minimizer material-icons"
                       onClick={() => this.props.toggleOpen()}
                >
                    expand_more
                </label>
                {this.props.children}

            </div>
        </div>
    }
}

class ClosedConsole extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="console-container closing">
                <div
                    className="edit-icon"
                    onClick={() => this.props.toggleOpen()}
                >
                    <button className="material-icons">videogame_asset</button>
                </div>

            </div>
        )

    }
}


export function renderComponent(component) {
    return class RenderComponent extends Component {

        render() {
            let {path, component} = this.props;
            if (path === 'tasks') return <TaskListSearcher {...this.props}/>;
            else if (path === 'navi') return <NaviConsole {...this.props}/>;

            return (
                <component {...this.props}/>
            )
        }
    }
}


let pathToComponentMapper = {
    tasks: <TaskListSearcher />,
    navi: <NaviConsole/>,
    apiMarket: <APIMarketConsole/>,

}
