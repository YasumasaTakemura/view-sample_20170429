import React, {Component} from 'react';


// child component of Console
export class TaskListSearcher extends Component {

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

export class NaviConsole extends Component {
    render() {
        const {taskListUpdater} = this.props

        return <div>
            NABVITIME
            <input onChange={e => taskListUpdater(e.target.value)}/>
        </div>

    }

}