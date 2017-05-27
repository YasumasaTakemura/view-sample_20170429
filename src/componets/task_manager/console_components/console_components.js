/**
 * Created by YasumasaTakemura on 2017/05/07.
 */
import React, {Component} from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Motion, spring} from 'react-motion'
import SearchInput, {createFilter} from 'react-search-input'
import './console_components.css'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {NavigationBar} from '../../navigationBar/navigationBar'
import {Sticky} from '../../shared_components/shared_components'

// Bundled Component


export let ConsoleContainerSwitcher = (props) => {
    return props.sticky ? <StickyConsoleContainer {...props}/> : <DraggableConsoleContainer {...props}/>;
}


export class StickyConsoleContainer extends Component {
    render() {
        return (
            <Sticky>
                <div className="draggable console-container">
                    <ConsoleContainer
                        width={800}
                        height={150}
                        open={this.props.open}
                        toggleOpen={this.props.toggleOpen.bind(this)}
                    >
                        <NavigationBar labels={this.props.labels}/>

                        <ConsoleSwitcher
                            path={this.props.path}
                            taskListUpdater={this.props.taskListUpdater}
                            taskLogUpdater={this.props.taskLogUpdater}
                            input={this.props.input}
                            data={this.props.data}

                        >
                        </ConsoleSwitcher>
                    </ConsoleContainer>
                </div>
            </Sticky>



        )
    }
}

export class DraggableConsoleContainer extends Component {

    render() {
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
                        <NavigationBar labels={this.props.labels}/>
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
        // return <Motion
        //     defaultStyle={startingParams}
        //     style={finishingParams}>
        //     {value => <div
        //         style={{
        //             width: value.x,
        //             height: value.y,
        //         }}
        //         className="console-container opening">
        //
        //         <div className="console-container-body">
        //             {this.props.children}
        //         </div>
        //
        //     </div>
        //     }
        // </Motion>
    }
}

class ClosedConsole extends Component {
    render() {
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

export class ConsoleContainer extends Component {

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
        let startingParams = {x: 0, y: 0};
        let finishingParams = {
            x: spring(this.width),
            y: spring(this.height)
        };

        if (this.props.open)return <OpenedConsole {...this.props}/>;
        return <ClosedConsole {...this.props}/>

    }
}

// switch console body depends on url path
export class ConsoleSwitcher extends Component {

    render() {
        let {path} = this.props;
        if (path === 'tasks') return <TaskListSearcher {...this.props}/>;
        else if (path === 'navi') return <NaviConsole {...this.props}/>;
        // else if(this.props.path === 'navi') return <TaskListSearcher {...this.props}/>

    }
}

// ---------------------  //
// Specified Components
// ---------------------  //

class NaviConsole extends Component {
    render() {
        const {taskListUpdater} = this.props

        return <div>
            NABVITIME
            <input onChange={e => taskListUpdater(e.target.value)}/>
        </div>

    }

}

// child component of Console
class TaskListSearcher extends Component {

    white = 'white'
    black = 'black'

    listBackgroundColor = 'white'
    logBackgroundColor = 'black'
    listTextColor = 'black'
    logTextColor = 'white'

    //if log tab is clicked
    _listBackgroundColor = 'black'
    _logBackgroundColor = 'white'
    _listTextColor = 'white'
    _logTextColor = 'black'

    list = {backgroundColor: this.listBackgroundColor, color: this.listTextColor}
    log = {backgroundColor: this.logBackgroundColor, color: this.logTextColor}

    _list = {backgroundColor: this._listBackgroundColor, color: this._listTextColor}
    _log = {backgroundColor: this._logBackgroundColor, color: this._logTextColor}

    constructor() {
        super();
        this.state = {
            on: 'list',
        }
    }

    changeStatus(key) {
        this.setState({on: key})

    }

    renderListComponent() {

        return <div className="taskList-container">

            <div>
                <button className="list" style={this.list} onClick={() => this.changeStatus('list')}>list</button>
                <button className="log" style={this.log} onClick={() => this.changeStatus('log')}>logs</button>
            </div>
            <input onChange={e => this.props.taskListUpdater(e.target.value)}/>
        </div>
    }

    renderLogsComponent() {
        return <div className="taskList-container">

            <div>
                <button className="list" style={this._list} onClick={() => this.changeStatus('list')}>list</button>
                <button className="log" style={this._log} onClick={() => this.changeStatus('log')}>logs</button>
            </div>
            <input onChange={e => this.props.taskLogUpdater(e.target.value)}/>
        </div>
    }

    render() {
        if (this.state.on === 'list')return this.renderListComponent();
        if (this.state.on === 'log')return this.renderLogsComponent();

    }
}

export class DataFilter extends Component {
    filter(key, data, input) {

        // change {item[key]} to what you need to be
        let list = data.filter((item, index) => item[key] === input);

        // [] returns all
        if (list.length === 0) return <div> {data.map((item, index) => <div key={index}> {item[key]} </div>)}</div>
        return <div> {list.map((item, index) => <div key={index}> {item[key]} </div>)}</div>

    }

    render() {
        const {data, input} = this.props;

        return <div>
            {this.props.children}
        </div>
    }
}


// child component of Console
export class ProcessSearcher extends Component {

    render() {
        const {updater} = this.props
        return <div>
            <input className="search-input" onChange={e => updater(e.target.value)}/>
        </div>

    }
}

// child component of Console
export class ListSearcher extends Component {

    render() {
        const {searchUpdated} = this.props

        return <div>
            <SearchInput className="search-input" onChange={searchUpdated}/>
        </div>

    }
}

// child component of Console
export class TaskRegister extends Component {

    state = {
        toggle: true,
    }

    componentWillMount() {
        // this.registerButton()
    }

    toggleType() {
        this.setState({toggle: !this.state.toggle})

    }

    ////////////////////////////
    // -- component -- //
    ////////////////////////////

    openGroupSelectorModal() {
        return <div className="register-group">
            <button onClick={() => this.props.toggleSliderOpen()} className="group">group</button>
        </div>

    }

    toggle(n) {
        return n + 1
    }

    type() {

        let query = 'query'
        let order = 'order'
        let toggle = true
        let button
        let n = 0

        if (toggle) {
            return <div className="register-type">
                <button onClick={() => toggle(n)} className="toggle query">query + {}</button>
            </div>
        }
        return <div className="register-type">
            <button onClick={() => toggle = true} className="toggle order">order</button>
        </div>

    }


    buttons() {

        if (this.state.toggle) {
            return <div className="register-type">
                <button onClick={() => this.toggleType()} className="toggle query">query</button>
            </div>
        }
        return <div className="register-type">
            <button onClick={() => this.toggleType()} className="toggle order">order</button>
        </div>


    }

    submit() {

        return <div className="register-submit">
            <button type="submit">register</button>
        </div>

    }

    input() {
        return <div className="register-input">
            <input/>
        </div>

    }

    registerButton() {

        let endpoint = 'https://facebook.github.io/react-native/movies.json'
        return axios(endpoint).then((response) =>
            console.log(response.data))
            .catch((error) => {
                console.error(error);
            });

    }


    container() {
        return <div className="register-container">
            {this.buttons()}
            {this.openGroupSelectorModal()}
            {this.submit()}
            {this.input()}

        </div>

    }

    render() {
        let {data, index} = this.props
        return this.container()
    }
}
