/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component, PropTypes} from 'react';
import './task_manager.css'

// to render lists of user tasks
export class TaskList extends Component {


    renderContainer(items) {

        return <ul>
            {
                items.map((item, index) => {
                    console.log(this.props.index , index)
                    // if selected turn background-color active
                    if (this.props.index === index) return  <li key={index} onClick={() => this.props.showLogs(item, index)} className="task-list on">
                            <div> {item.icon} </div>
                            <div> {item.title} </div>
                            <div> {item.title} </div>
                        </li>

                    // not selected
                    return <li key={index} onClick={() => this.props.showLogs(item, index)} className="task-list">
                        <div> {item.icon} </div>
                        <div> {item.title} </div>
                        <div> {item.title} </div>
                    </li>
                } )}
        </ul>
    }

    render() {
        let {data} = this.props
        return this.renderContainer(data)
    }

}


export class TaskLogWithChat extends Component {

    switchProcess(message, i) {
        if (this.props.processTimeline) return <div className="processes"> {this.renderProcess(message.processes, i)}</div>
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
                    <div className="text"> {
                        //split text into multi-line
                        message.text.split("\n").map((t, i) => {
                            return <div key={i}>{t}</div>;
                        })}</div>
                </div>


            </div>
        </div>

    }

    // messages with processes branch
    renderMessageWithProcess(message, i) {

        return <div
            key={i} className="message-container">
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
                        className="material-icons toggle">cleared</div>

                </div>


                <div className="body">
                    <div className="text"> {
                        //split text into multi-line
                        message.text.split("\n").map((t, i) => {
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
                        <div className="username">@{message.username}</div>
                    </div>
                    <div><img className="icon" src={message.img}/></div>
                </div>


                <div className="body">
                    <div className="text"> {

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

        return <div
            key={i} className="my-message-container">
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
                        className="toggle">X</div>
                </div>


                <div className="body">
                    <div className="text"> {
                        //split text into multi-line
                        message.text.split("\n").map((t, i) => {
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
            <div className="process-line">

            </div>
            <div key={i} className="process">

                {processes.map((process, index) => this.renderProcessUnit(process, index))}


            </div>
        </div>
    }


    //Children
    renderProcessUnit(process, i) {


        //validate object has state
        // state-full
        if(process.state !== undefined) return <div key={i} className="process-unit-container">
            <div key={i} className="process-unit">

                <div className="icon">
                    <i className="material-icons p-types">{process.types}</i>
                </div>
                <div className="detail">

                    <div className="p-timestamp">{process.timestamp}</div>
                    <div className="p-username">@{process.username}</div>
                    <div className="p-messages">{process.message}</div>
                    <div className="p-state"><span>{process.state}</span></div>

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

    renderMessages(data) {
        let messages = data.messages

        //validate messages exit
        if (messages === undefined) {
            return <div className="task-log-container">
                <div className="no-messages">no messages</div>
            </div>

        } else {
            return <div className="task-log-container">{

                messages.map((mesasge, i) => {

                        // validate messages for me or others
                        if (mesasge.username !== 'me' && mesasge.processes !== undefined) return this.renderMessageWithProcess(mesasge, i)
                        else if (mesasge.username !== 'me') return this.renderMessage(mesasge)
                        else if (mesasge.processes !== undefined) return this.renderMyMessageWithProcess(mesasge, i)
                        return this.renderMyMessage(mesasge, i)


                    }
                )
            }
            </div>
        }
    }


    renderLogs() {

    }


    render() {
        let {data, index} = this.props
        return this.renderMessages(data[index])
    }
}

// to render log data of each list of user tasks
export class Register extends Component {

    register() {
        return <input/>

    }

    container() {
        return <div>{this.register()}</div>

    }

    render() {
        let {data, index} = this.props
        return this.container()
    }
}

export function register() {
    return <input/>

}

export class TaskInputWindow extends Component {

    inputWindow() {

        return <div className="task-input-window-container">

            <div onDoubleClick={() => this.props.toggleOpen()} className="task-input-window">

                <div className="icons">
                    <div className="material-icons">grid_on</div>
                    <div className="material-icons">content_paste</div>
                    <div className="material-icons">attach_file</div>
                </div>

                <div className="title-input">
                    <input/>
                    <button className="material-icons send">send</button>
                </div>

            </div>

        </div>

    }

    inputClosedWindow() {
        return <div className="task-input-window-container-closed">

            <div className="edit-icon" onClick={() => this.props.toggleOpen()}>
                <button className="material-icons">edit</button>
            </div>


        </div>

    }


    render() {

        if (this.props.open) {
            return this.inputWindow()
        }
        return this.inputClosedWindow()

    }
}
