/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
import React, {Component} from 'react';
import './tasklog_timeline.css'

export class TaskLogTimeLine extends Component {


    render() {
        let {data, filteredData, index, input} = this.props
        console.log(data[index])
        console.log( data[index].messages)
        console.log( data[index].messages.length)


        if(data[index].messages.length === 1) return <div> no data </div>
        if (!input) {
            return <div>
                {
                    data[index].messages.map((message, _index) =>
                        <TaskLogMessageContainer
                            key={_index}
                            messages={message}
                        />
                    )}
            </div>
        }

        return <div>
            {
                filteredData[index].messages.map((message, _index) =>
                    <TaskLogMessageContainer
                        key={_index}
                        messages={message}
                    />
                )}
        </div>

    }
}
class TaskLogMessageContainer extends Component {

    render() {

        let {messages, key} = this.props

        console.log(messages.processes)

        return <div key={key} className="message-container">
            <div key={key} className="message with-process">
                <div className="header">
                    <div><img className="icon" src={messages.img}/></div>
                    <div className="detail">
                        <div className="timestamp">{messages.timestamp}</div>
                        <div className="username">@{messages.username}</div>
                    </div>
                    <div
                        onTouchStart={() => this.props.toggleProcessTimeline()}
                        onClick={() => this.props.toggleProcessTimeline()}
                        className="material-icons toggle">cleared
                    </div>
                </div>

                <div className="body">
                    <div className="text">
                        {
                            //split text into multi-line
                            messages.text.split("\n").map((t, i) => {
                                return <div key={i}>{t}</div>;
                            })}</div>
                </div>

            </div>

            <TaskLogProcessContainer
                processes={messages.processes}
                key={key}
            />

        </div>

    }
}

class TaskLogProcessContainer extends Component {
    render() {

        let {processes, key} = this.props

        return <div key={key} className="process-container">
            <div className="process-line"></div>
            <div key={key} className="process">

                {processes.map((process, index) => <TaskLogProcessAction process={process} key={key}/>)}

            </div>
        </div>
    }
}


class TaskLogProcessAction extends Component {

    stateColor = {backgroundColor:'blue'}

    render() {
        let {key, process} = this.props
        if(process.state === 'closed') this.stateColor = {backgroundColor:'red'}

        return <div key={key} className="process-unit-container">
            <div key={key} className="process-unit">

                <div className="icon">
                    <i className="material-icons p-types">{process.types}</i>
                </div>

                <div className="detail">
                    <div className="p-timestamp">{process.timestamp}</div>
                    <div className="p-username">@{process.username}</div>
                    <div className="p-messages">{process.message}</div>
                    <div className="p-state">
                        <span style={this.stateColor}>{process.state}</span>
                    </div>

                </div>

            </div>
        </div>

    }
}
