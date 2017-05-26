/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import Moment from 'moment'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {Motion, spring} from 'react-motion';
import SearchInput, {createFilter} from 'react-search-input'
import {NavigationBar} from '../../componets/navigationBar/navigationBar'
import {
    TaskTimeLine,
    TaskList,
    GroupSelectorModal,
} from '../../componets/task_manager/task_manager'
import {
    ConsoleContainer,
    ConsoleSwitcher,
    DraggableConsoleContainer
}  from '../../componets/task_manager/console_components/console_components'
import './task_manager.css'
import Slider from 'react-slick';

let moment = new Moment()
// let formatForList = "YYYY年MM月DD日 HH:mm:ss dddd"
let JP_formatForList = "YYYY年MM月DD日 HH:mm"
export class TaskManager extends Component {

    constructor() {
        super();
        this.state = {
            path: window.location.href.split('/').slice(-1)[0],
            index: 0,

            listInput: '',
            messageInput: '',

            // for search input
            MessageInput: '',
            filteredMessage: ['messages.text'],
            filteredList: 'title',

            slider: false,
            open: true,
            processTimeline: true,
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },

            data: [
                {
                    title: 'tasks',
                    username: 'jake',
                    icon: 'forward',
                    timestamp: moment.format(JP_formatForList),
                    type: 'query',
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
                            timestamp: moment.format(JP_formatForList),
                            processes: [
                                {
                                    username: 'jake',
                                    timestamp: moment.format(JP_formatForList),
                                    types: 'edit',
                                    message: 'change the 131th line of documentation "Media Guides" ',


                                }, {
                                    username: 'ashleyford',
                                    timestamp: moment.format(JP_formatForList),
                                    types: 'add',
                                    message: 'add new documentation',


                                }, {
                                    username: 'jake',
                                    timestamp: moment.format(JP_formatForList),
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
                            timestamp: moment.format(JP_formatForList),
                            processes: [
                                {
                                    username: 'jake',
                                    timestamp: moment.format(JP_formatForList),
                                    types: 'edit',
                                    message: 'change the 131th line of documentation "Media Guides" ',


                                }, {
                                    username: 'ashleyford',
                                    timestamp: moment.format(JP_formatForList),
                                    types: 'add',
                                    message: 'add new documentation',


                                }, {
                                    username: 'jake',
                                    timestamp: moment.format(JP_formatForList),
                                    types: 'remove_circle_outline',
                                    message: '',
                                    state: 'closed',

                                },
                            ],
                        }, {
                            username: 'me',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg',
                            text: 'i want you to do this',
                            timestamp: moment.format(JP_formatForList),
                            documents: '',
                            attachments: ''
                        }, {
                            username: 'system',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg',
                            text: 'system message',
                            timestamp: moment.format(JP_formatForList)
                        }]
                },
                {
                    title: 'a',
                    icon: 'forward',
                    username: 'cathy',
                    timestamp: moment.format(JP_formatForList),
                    type: 'query',
                    log: [{
                        text: 'this is 2',
                        timestamp: '2017-0430-00:01'
                    }],
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
                            messages: [],
                        }, {
                            username: 'adellecharles',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
                            text: 'this is a test message by adellecharles',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                            messages: [],
                        }, {
                            username: 'me',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg',
                            text: 'i want you to do this',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                            messages: [],
                            documents: '',
                            attachments: ''
                        }, {
                            username: 'system',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg',
                            text: 'system message',
                            timestamp: moment.format("YYYY年MM月DD日 HH:mm:ss dddd"),
                            messages: [],
                        }]
                },
                {
                    title: 'bb',
                    icon: 'forward',
                    username: 'ashleyford',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    log: [{
                        text: 'this is 3',
                        timestamp: '2017-0430-00:02'
                    }]
                },
                {
                    title: 'vv',
                    icon: 'forward',
                    username: 'devid',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    log: [{
                        text: 'this is 4',
                        timestamp: '2017-0430-00:03'
                    }]
                },
                {
                    title: 'ta',
                    icon: 'forward',
                    username: 'ashleyford',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    log: [{
                        text: 'this is 5',
                        timestamp: '2017-0430-00:04'
                    }]
                },

            ],

        }
    }

    ////////////////////////////
    // -- input updater -- //
    ////////////////////////////
    searchUpdatedForList(term) {
        this.setState({listInput: term})
    }

    searchUpdatedForMessages(term) {
        this.setState({messageInput: term})
    }

    showLogs(item, index) {

        this.setState({
            log: item,
            index: index
        })


    }

    ////////////////////////////
    // -- toggle -- //
    ////////////////////////////
    toggleSliderOpen() {

        this.setState({slider: true})
    }

    toggleSliderClose() {
        this.setState({slider: false})
    }

    toggleOpen() {
        this.setState(
            {open: !this.state.open}
        )

    }

    toggleProcessTimeline() {
        this.setState(
            {processTimeline: !this.state.processTimeline}
        )

    }

    //////////////////////////////////////
    // THIS IS FOR DRAGGABLE COMPONENTS
    //////////////////////////////////////
    onStart() {
        this.setState({activeDrags: ++this.state.activeDrags});
    }

    onStop() {
        this.setState({activeDrags: --this.state.activeDrags});
    }


    //////////////////////////////////////
    // Filter
    //////////////////////////////////////
    keywordFilterForTaskList(key) {
        // change {item[key]} to what it need to be
        let list = this.state.data.filter((item, index) => item[key] === this.state.listInput)

        // [] returns all
        if (list.length === 0) return []
        return list

    }

    keywordFilterForMessages(index, key) {
        const {data} = this.state
        let list = []

        for (let i = 0; i < data.length; i++) {
            let messages = data[index].messages
            console.log(messages)
            if (messages !== undefined) {
                list = messages.filter((item, index) => item[key] === this.state.messageInput)
                console.log(list)
                return list
            }
        }

        // [] returns all
        return list


    }

    render() {

        return <div className="task-root">


            <GroupSelectorModal
                slider={this.state.slider}
                toggleSliderOpen={this.toggleSliderOpen.bind(this)}
                toggleSliderClose={this.toggleSliderClose.bind(this)}
            />

            <div className="task-container">

                <div className="left">
                    <TaskList
                        input={this.state.listInput}
                        index={this.state.index}
                        showLogs={this.showLogs.bind(this)}
                        data={this.state.data}
                        filteredList={this.keywordFilterForTaskList.bind(this)}
                    />
                </div>


                <div className="right">

                    <TaskTimeLine
                        data={this.state.data}
                        filteredData={this.keywordFilterForMessages.bind(this)}
                        input={this.state.messageInput}
                        index={this.state.index}
                        processTimeline={this.state.processTimeline}
                        showLogs={this.showLogs.bind(this)}
                        toggleProcessTimeline={this.toggleProcessTimeline.bind(this)}

                    />
                </div>
            </div>


            <div className="console-container">

                <DraggableConsoleContainer
                    handle=".draggable"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[1, 1]}
                    width={800}
                    height={150}
                    open={this.state.open}
                    toggleOpen={this.toggleOpen.bind(this)}
                >
                    <NavigationBar
                        labels={["code", "menu", "mail_outline", "cloud", "code", "menu", "mail_outline", "cloud"]}/>

                    <div className="task-register handle"
                         onDoubleClick={this.toggleOpen.bind(this)}
                    >
                        <ConsoleSwitcher
                            path={this.state.path}
                            updater={this.searchUpdatedForList.bind(this)}
                            input={this.state.input}
                            data={this.state.data}
                        />
                    </div>
                </DraggableConsoleContainer>

            </div>


        </div>
    }
}


