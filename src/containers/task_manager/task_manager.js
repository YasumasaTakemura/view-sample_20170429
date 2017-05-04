/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component, PropTypes} from 'react';
import Moment from 'moment'
import {

    TaskLog,
    TaskLogWithChat,
    TaskList,
    Register,
    TaskInputWindow
} from '../../componets/task_manager/task_manager'
import './task_manager.css'

let moment = new Moment()
export class TaskManager extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: 'tasks', icon: <div className="material-icons">forward</div>,
                    log: [
                        {
                            text: 'this is a test',
                            timestamp: '2017-0430-00:00'
                        },
                        {
                            text: 'show this text',
                            timestamp: '2017-0501-00:00'
                        },

                    ],
                    messages: [
                        {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            text: 'this is a test message \n multi line',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                            processes: [
                                {
                                    username: 'jake',
                                    timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                                    types: 'edit',
                                    message: 'change the 131th line of documentation "Media Guides" ',


                                }, {
                                    username: 'ashleyford',
                                    timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                                    types: 'add',
                                    message: 'add new documentation',


                                }, {
                                    username: 'jake',
                                    timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                                    types: 'remove_circle_outline',
                                    message: '',
                                    state: 'closed',

                                },
                            ],
                        }
                        , {
                            username: 'ashleyford',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
                            text: 'this is a test message by ashleyford',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                        }, {
                            username: 'adellecharles',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
                            text: 'this is a test message by adellecharles',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd")
                        }, {
                            username: 'me',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg',
                            text: 'i want you to do this',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                            documents: '',
                            attachments: ''
                        }, {
                            username: 'system',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg',
                            text: 'system message',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd")
                        }]
                },
                {
                    title: 'a', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 2',
                        timestamp: '2017-0430-00:01'
                    }]
                },
                {
                    title: 'bb', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 3',
                        timestamp: '2017-0430-00:02'
                    }]
                },
                {
                    title: 'vv', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 4',
                        timestamp: '2017-0430-00:03'
                    }]
                },
                {
                    title: 'ta', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 5',
                        timestamp: '2017-0430-00:04'
                    }]
                },
                {
                    title: 'aadd', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 6',
                        timestamp: '2017-0430-00:05'
                    }]
                },
                {
                    title: 'dfadfa', icon: <div className="material-icons">forward</div>,
                    log: [{
                        text: 'this is 7',
                        timestamp: '2017-0430-00:06'
                    }]
                },

            ],
            index: 0,
            open: true,
            processTimeline: true,
        }
    }


    showLogs(item, index) {

        this.setState({
            log: item,
            index: index
        })


    }

    toggleOpen() {

        console.log()
        this.setState(
            {open: !this.state.open}
        )

    }

    toggleProcessTimeline() {
        console.log(this.state.processTimeline)
        this.setState(
            {processTimeline: !this.state.processTimeline}
        )

    }


    render() {
        return <div>

            <div className="task-register">
                <Register/>
                <button/>
                <button/>


            </div>

            <div className="task-container">
                <div className="left">
                    <TaskList
                        data={this.state.data}
                        index={this.state.index}
                        showLogs={this.showLogs.bind(this)}/>
                </div>

                <div className="right">

                    <TaskLogWithChat
                        data={this.state.data}
                        index={this.state.index}
                        processTimeline={this.state.processTimeline}
                        showLogs={this.showLogs.bind(this)}
                        toggleProcessTimeline={this.toggleProcessTimeline.bind(this)}

                    />
                </div>
            </div>

            <TaskInputWindow open={this.state.open} toggleOpen={this.toggleOpen.bind(this)}/>


        </div>
    }
}


