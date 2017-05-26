/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Motion, spring} from 'react-motion'
import SearchInput, {createFilter} from 'react-search-input'
import './task_manager.css'

// to render lists of user tasks
export class TaskList extends Component {

    renderContainer() {
        //1st arg is for targeting term
        let data = this.props.filteredList('title')

        // no filtered data exist
        if (data.length === 0) {

            let {data} = this.props
            
            return (
            //if filtered data exist 
            <ul>
                
                { data.map((item, index) => {

                    // this.props.index is for a selecting index
                    if (this.props.index === index) 
                        return (
                            <li
                                key={index}
                                onClick={() => this.props.showLogs(item, index)}
                                className="task-list on">

                                <div className="header">
                                    {/*<i className="material-icon icon">{item.icon}</i>*/}
                                    <div className="timestamp">
                                        {item.timestamp}
                                    </div>
                                    <div className="type">
                                        {item.type}
                                    </div>
                                    <div className="username">
                                        @{item.username}
                                    </div>
                                </div>

                                <div className="detail">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                </div>

                            </li>
                        );
                    
                    // if not selected
                    return (
                        <li
                            key={index}
                            onClick={() => this.props.showLogs(item, index)}
                            className="task-list">
                            <div className="header">
                                {/*<i className="material-icon icon">{item.icon}</i>*/}
                                <div className="timestamp">
                                    {item.timestamp}
                                </div>
                                <div className="type">
                                    {item.type}
                                </div>
                                <div className="username">
                                    @{item.username}
                                </div>

                            </div>

                            <div className="detail">
                                <div className="title">
                                    {item.title}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            )
        } else {
            return <ul>
                {data.map((item, index) => {
                    if (this.props.index === index) 
                        return <li
                            key={index}
                            onClick={() => this.props.showLogs(item, index)}
                            className="task-list on">

                            <div className="header">
                                {/*<i className="material-icon icon">{item.icon}</i>*/}
                                <div className="timestamp">
                                    {item.timestamp}
                                </div>
                                <div className="type">
                                    {item.type}
                                </div>
                                <div className="username">
                                    @{item.username}
                                </div>

                            </div>

                            <div className="detail">
                                <div className="title">
                                    {item.title}
                                </div>
                            </div>

                        </li>;
                    
                    // not selected
                    return <li
                        key={index}
                        onClick={() => this.props.showLogs(item, index)}
                        className="task-list">
                        <div className="header">
                            {/*<i className="material-icon icon">{item.icon}</i>*/}
                            <div className="timestamp">
                                {item.timestamp}
                            </div>
                            <div className="type">
                                {item.type}
                            </div>
                            <div className="username">
                                @{item.username}
                            </div>

                        </div>

                        <div className="detail">
                            <div className="title">
                                {item.title}
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        }
    }

    render() {
        let {filteredList} = this.props
        return this.renderContainer(filteredList)
    }

}

export class TaskTimeLine extends Component {

    switchProcess(message, i) {
        if (this.props.processTimeline) 
            return <div className="processes">
                {this.renderProcess(message.processes, i)}</div>
        return <div className="processes"></div>

    }

    renderMessage(message, i) {

        return <div key={i} className="message-container">
            <div key={i} className="message">
                <div className="header">
                    <div><img className="icon" src={message.img}/></div>
                    <div className="detail">
                        <div className="timestamp">{message.timestamp}</div>
                        <div className="username">@{message.username}</div>
                    </div>
                </div>

                <div className="body">
                    <div className="text">
                        {//split text into multi-line
                        message
                            .text
                            .split("\n")
                            .map((t, i) => {
                                return <div key={i}>{t}</div>;
                            })}</div>
                </div>

            </div>
        </div>

    }

    // messages with processes branch
    renderMessageWithProcess(message, i) {
        return <div key={i} className="message-container">
            <div key={i} className="message with-process">
                <div className="header">
                    <div><img className="icon" src={message.img}/></div>
                    <div className="detail">
                        <div className="timestamp">{message.timestamp}</div>
                        <div className="username">@{message.username}</div>

                    </div>
                    <div
                        onTouchStart={() => this.props.toggleProcessTimeline()}
                        onClick={() => this.props.toggleProcessTimeline()}
                        className="material-icons toggle">cleared
                    </div>

                </div>

                <div className="body">
                    <div className="text">
                        {//split text into multi-line
                        message
                            .text
                            .split("\n")
                            .map((t, i) => {
                                return <div key={i}>{t}</div>;
                            })}</div>
                </div>

            </div>

            {this.switchProcess(message, i)}

        </div>

    }

    renderMyMessage(message, i) {

        return <div key={i} className="my-message-container">
            <div key={i} className="my-message">
                <div className="header">
                    <div className="detail">
                        <div className="timestamp">{message.timestamp}</div>
                        <span className="username">@{message.username}</span>
                    </div>
                    <div><img className="icon" src={message.img}/></div>
                </div>

                <div className="body">
                    <div className="text">
                        {
                        //split text into multi-line
                        message.text.split("\n").map((t, i) => {
                                return <div key={i}>{t}</div>;
                            })}</div>
                </div>

            </div>
        </div>
    }

    // messages with processes branch
    renderMyMessageWithProcess(message, processes, i) {

        return <div key={i} className="my-message-container">
            <div key={i} className="my-message with-process">
                <div className="header">
                    <div><img className="icon" src={message.img}/></div>
                    <div className="detail">
                        <div className="timestamp">{message.timestamp}</div>
                        <div className="username">@{message.username}</div>

                    </div>
                    <div
                        onTouchStart={() => this.props.toggleProcessTimeline()}
                        onClick={() => this.props.toggleProcessTimeline()}
                        className="toggle">X
                    </div>
                </div>

                <div className="body">
                    <div className="text">
                        {//split text into multi-line
                        message
                            .text
                            .split("\n")
                            .map((t, i) => {
                                return <div key={i}>{t}</div>;
                            })}</div>
                </div>

            </div>

            {this.switchProcess(message, i)}

        </div>
    }

    //Parent
    renderProcess(processes, i) {

        return <div key={i} className="process-container">
            <div className="process-line"></div>
            <div key={i} className="process">

                {processes.map((process, index) => this.renderProcessUnit(process, index))}

            </div>
        </div>
    }

    //Children
    renderProcessUnit(process, i) {

        //validate object has state state-full
        if (process.state !== undefined) 
            return <div key={i} className="process-unit-container">
                <div key={i} className="process-unit">

                    <div className="icon">
                        <i className="material-icons p-types">{process.types}</i>
                    </div>
                    <div className="detail">

                        <div className="p-timestamp">{process.timestamp}</div>
                        <div className="p-username">@{process.username}</div>
                        <div className="p-messages">{process.message}</div>
                        <div className="p-state">
                            <span>{process.state}</span>
                        </div>

                    </div>

                </div>
            </div>

            // state-less
        return <div key={i} className="process-unit-container">
            <div key={i} className="process-unit">
                <div className="icon">
                    <i className="material-icons p-types">{process.types}</i>
                </div>
                <div className="detail">
                    <div className="p-timestamp">{process.timestamp}</div>
                    <div className="p-username">@{process.username}</div>
                    <div className="p-messages">{process.message}</div>
                </div>

            </div>
        </div>

    }

    //top level component
    renderMessages(index) {

        let data = this.props.data
        data = data[index]
        let messages = data.messages

        //validate messages exit
        if (messages === undefined) {
            return <div className="task-log-container">
                <div className="no-messages">no messages</div>
            </div>

        } else {
            return <div className="task-log-container">{messages.map((message, i) => {

                    // validate messages for me or others
                    if (message.username !== 'me' && message.processes !== undefined) 
                        return this.renderMessageWithProcess(message, i)
                    else if (message.username !== 'me') 
                        return this.renderMessage(message, i)
                    else if (message.processes !== undefined) 
                        return this.renderMyMessageWithProcess(message, i)
                    return this.renderMyMessage(message, i)

                })
}
            </div>
        }
    }

    renderFilteredMessages(index) {

        let data = this
            .props
            .filteredData(index, 'username')
        data = data[index]
        let messages = data.messages

        //validate messages exit
        if (messages === undefined) {
            return <div className="task-log-container">
                <div className="no-messages">no messages</div>
            </div>

        } else {
            return <div className="task-log-container">{messages.map((message, i) => {

                    // validate messages for me or others
                    if (message.username !== 'me' && message.processes !== undefined) 
                        return this.renderMessageWithProcess(message, i)
                    else if (message.username !== 'me') 
                        return this.renderMessage(message, i)
                    else if (message.processes !== undefined) 
                        return this.renderMyMessageWithProcess(message, i)
                    return this.renderMyMessage(message, i)

                })
}
            </div>
        }
    }

    renderLogs() {}

    render() {
        let {data, index, input, filteredData} = this.props
        if (data.length !== 0) 
            return this.renderMessages(index)
        return this.renderFilteredMessages(index)
    }
}

export class GroupSelectorModal extends Component {

    style = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            height: '100vh',
            position: 'absolute',
            zIndex: 100,
            backgroundColor: '#F9DF2C',
            width: '300px',
            left: '0',
            top: '0',
            outline: 'none',
            borderRadius: '0'
            // transition: '2.8s ease-out', marginRight           : '-50%',
            // transform:'translateX(500px)'
        }
    }

    afterOpen() {
        console.log('---------------')
        return <Motion
            defaultStyle={{
            x: 0
        }}
            style={{
            x: spring(3)
        }}>

            {interpolatedStyle => {
                console.log(interpolatedStyle.x);
                return <div>{interpolatedStyle.x}</div>
            }
}
        </Motion>

    }

    //////////////////////////// -- component -- // //////////////////////////
    modal(motion) {
        return <Modal isOpen={this.props.slider} onAfterOpen={() => this.afterOpen()} onRequestClose={() => this.props.toggleSliderClose()} closeTimeoutMS={100} style={this.style} // className ='group-selector'
    contentLabel="Modal">
            <h1>Modal Content</h1>
            <button onClick={() => this.props.toggleSliderClose()}>toggle</button>
            <input/>
            <p>Etc.</p>
        </Modal>
    }

    render() {
        return <div>
            {this.modal()}

        </div>

    }

}




export class GroupSelector extends Component {

    render() {
        return <div>
            <Select
                name="group-selector"
                value="one"
                options={this.props.options}
                onChange={() => this.props.logChange()}/>
        </div>

    }
}
