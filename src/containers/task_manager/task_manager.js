/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import Moment from 'moment'
import {TaskListContainer} from '../../componets/task_manager/tasklist/tasklist'
import {TaskLogTimeLine} from '../../componets/task_manager/tasklog_timeline/tasklog_timeline'
import {ConsoleContainer}  from '../../componets/chat_like_console/console'
import {MenuIconContainerSwitcher} from '../../componets/task_manager/menu_icons/menu_icons'
import './task_manager.css'
import axios from 'axios'

let moment = new Moment()
// let formatForList = "YYYY年MM月DD日 HH:mm:ss dddd"
let JP_formatForList = "YYYY年MM月DD日 HH:mm"


export class TaskManager extends Component {

    constructor() {
        super();
        this.state = {

            consoleState: true,
            consoleWidth: 350,
            alertState: false,
            popUpState: false,
            index: 0,

            containerBoarderStyleID: 'taskList',

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

            currentComponent: 'task_list',

            menuIcons: [
                {
                    label: 'info',
                    img: 'https://image.flaticon.com/icons/svg/118/118793.svg',
                    content: [
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '明日より大型UPDATEが開始されます。メンテナンスは13:00-17:00までを予定しております。',
                            read: false
                        },
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '今月のご請求金額は 150,000円となります。',
                            read: false
                        },
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '今月のご請求金額は 200,000円となります。',
                            read: false
                        },
                    ]
                },
                {
                    label: 'alert',
                    img: 'https://image.flaticon.com/icons/svg/196/196759.svg',
                    content: [
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '今月の予算上限に達したため、APIの利用を停止しております。',
                            read: false
                        },
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '＊＊＊ベータ版へのお申し込みが残り３日になっております。',
                            read: false
                        },
                    ]
                },
                {
                    label: 'special',
                    img: 'https://image.flaticon.com/icons/svg/19/19938.svg',
                    content: [
                        {
                            timestamp: moment.format(JP_formatForList),
                            description: '6月20日までの間、APIの転送料金が20%オフとなっております。',
                            read: false
                        },
                    ]
                },
            ],

            data: [
                {
                    title: 'tasks',
                    status: 'immediately',
                    category: ['input', 'check'],
                    description: '### テスト　勉強　\n\   You can see the progress on https://github.com/fixTypos/fix_typos/ \n\   [https://github.com/client9/misspell](https://github.com/client9/misspell)',
                    username: 'jake',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                    icon: 'forward',
                    timestamp: moment.format(JP_formatForList),
                    type: 'query',
                    logs: [

                        {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'edit',
                            message: 'change the 131th line of documentation "Media Guides" ',
                            state: 'done',


                        }, {
                            username: 'ashleyford',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'add',
                            message: 'add new documentation',
                            state: 'done',


                        }, {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'remove_circle_outline',
                            message: '',
                            state: 'closed',

                        },
                    ],
                }, {
                    title: 'tasks2',
                    status: 'immediately',
                    category: ['input', 'check'],
                    description: '',
                    username: 'jake',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                    icon: 'forward',
                    timestamp: moment.format(JP_formatForList),
                    type: 'query',
                    logs: [

                        {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'edit',
                            message: 'change the 131th line of documentation "Media Guides" ',
                            state: 'done',

                        }, {
                            username: 'ashleyford',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'add',
                            message: 'add new documentation',
                            state: 'done',


                        }, {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'remove_circle_outline',
                            message: '',
                            state: 'closed',

                        },
                        {
                            username: 'system',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg',
                            message: 'system message',
                            types: 'clear',
                            timestamp: moment.format(JP_formatForList),
                            state: 'done',
                        }
                    ],
                },
                {
                    title: 'a',
                    status: '',
                    category: ['input', 'check'],
                    description: '',
                    icon: 'forward',
                    username: 'cathy',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
                    timestamp: moment.format(JP_formatForList),
                    type: 'query',
                    logs: [

                        {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'edit',
                            message: 'change the 131th line of documentation "Media Guides" ',
                            state: 'done',

                        }, {
                            username: 'ashleyford',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'add',
                            message: 'add new documentation',
                            state: 'done',


                        }, {
                            username: 'jake',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
                            timestamp: moment.format(JP_formatForList),
                            types: 'remove_circle_outline',
                            message: '',
                            state: 'closed',

                        },
                        {
                            username: 'system',
                            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg',
                            message: 'system message',
                            types: 'clear',
                            timestamp: moment.format(JP_formatForList),
                            state: 'done',
                        }
                    ],
                },
                {
                    title: 'bb',
                    status: 'hurry',
                    category: ['input', 'check'],
                    description: '',
                    icon: 'forward',
                    username: 'ashleyford',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    logs: []
                },
                {
                    title: 'vv',
                    status: '',
                    category: ['input', 'check'],
                    description: '',
                    icon: 'forward',
                    username: 'devid',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    logs: []
                },
                {
                    title: 'ta',
                    status:'',
                    category: ['input', 'check'],
                    description: '',
                    icon: 'forward',
                    username: 'ashleyford',
                    photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
                    timestamp: moment.format(JP_formatForList),
                    type: 'order',
                    logs: []
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

    filterMessages() {

        // change {item[key]} to what it need to be
        let list = this.state.data.filter((item, index) => item['messages']['username'] === this.state.messageInput)
        // [] returns all
        if (list.length === 0) return []
        return list

    }

    keywordFilterForMessages(index, key) {
        const {data} = this.state
        let list = []

        for (let i = 0; i < data.length; i++) {
            let messages = data[index].messages
            if (messages !== undefined) {
                list = messages.filter((item, index) => item[key] === this.state.messageInput)
                return list
            }
        }
        // [] returns all
        return list


    }


    //////////////////////////////////////
    // REGISTER
    //////////////////////////////////////
    registerTaskList(data) {
        let endpoint = ''
        let payload = data
        axios.post(endpoint, payload)
            .then((response) => {
                console.log(response);
                this.setState(
                    {data: response.date}
                )
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {

        console.log(this.props.match.params.tabs,)

        const {containerBoarderStyleID, consoleState, consoleWidth} = this.state
        const jsonData = JSON.stringify(this.state.data);

        // for a dynamic style
        const styles = {
            taskList: {
                border: 'solid 2px red'
            },
            hidden: {
                right: '-300px'
            },
            space: {
                marginBottom: 20
            },
        };

        return <div className="task-root">

            <ConsoleContainer
                {...this.props}
                consoleState={consoleState}
                consoleWidth={consoleWidth}
                open={this.state.open}
                toggleOpen={this.toggleOpen.bind(this)}
                taskListUpdater={this.searchUpdatedForList.bind(this)}
                taskLogUpdater={this.searchUpdatedForMessages.bind(this)}
                input={this.state.listInput}
                data={this.state.data}
                registerTaskList={this.registerTaskList.bind(this)}
            />

            <MenuIconContainerSwitcher
                popUpState={this.state.popUpState}
                icons={this.state.menuIcons}/>

            {/*<GroupSelectorModal*/}
            {/*slider={this.state.slider}*/}
            {/*toggleSliderOpen={this.toggleSliderOpen.bind(this)}*/}
            {/*toggleSliderClose={this.toggleSliderClose.bind(this)}*/}
            {/*/>*/}

            {/*<div className="task-manager-header"/>*/}
            {/*<div className="task-manager-navigator"/>*/}

            {/*style={containerBoarderStyleID === 'taskList' ? styles.taskList : null}*/}

            <div style={styles.space}/>
            <div className="task-manager-container">

                <div className="task-list-container">
                    <TaskListContainer
                        input={this.state.listInput}
                        index={this.state.index}
                        showLogs={this.showLogs.bind(this)}
                        data={this.state.data}
                        filteredList={this.keywordFilterForTaskList.bind(this)}
                    />
                </div>

                <div className="task-log-container">
                    <TaskLogTimeLine
                        data={this.state.data}
                        filterMessages={this.filterMessages.bind(this)}
                        input={this.state.messageInput}
                        index={this.state.index}
                        processTimeline={this.state.processTimeline}
                        showLogs={this.showLogs.bind(this)}
                        toggleProcessTimeline={this.toggleProcessTimeline.bind(this)}

                    />
                </div>
            </div>
        </div>
    }
}

// <ConsoleContainerSwitcher
//                    width={800}
//                    height={150}
//                    open={this.state.open}
//                    toggleOpen={this.toggleOpen.bind(this)}
//                    sticky={true}
//                    path={this.state.path}
//                    taskListUpdater={this.searchUpdatedForList.bind(this)}
//                    taskLogUpdater={this.searchUpdatedForMessages.bind(this)}
//                    input={this.state.listInput}
//                    data={this.state.data}
//                    component={TaskListSearcher}
//                    registerTaskList={this.registerTaskList.bind(this)}
//                />