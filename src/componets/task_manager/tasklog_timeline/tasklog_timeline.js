/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
import React, {Component} from 'react';
import './tasklog_timeline.css'



export class TaskLogTimeLine extends Component {


    render() {
        let {data, filteredData, index, input} = this.props

        if(data[index].messages.length === 1) return <div> no data </div>
        if (!input) return <TaskLogTimeLineWithData data={data[index]}/>
        return <TaskLogTimeLineWithFilteredData data={filteredData[index]}/>
    }
}

let TaskLogTimeLineWithData = (data)=>{

    return <div className="task-log-container-adjustment">
        <TaskDescriptionTitle log={data.data}/>
        <TaskDescriptionUserIcon log={data.data}/>
        <TaskDescriptionContainer />
        {
            data.data.messages.map((message, _index) =>
                <TaskLogMessageContainer
                    key={_index}
                    messages={message}
                />
            )}
    </div>
}
let TaskLogTimeLineWithFilteredData = (data)=>{
    return <div>
        <TaskDescriptionTitle log={data.data}/>
        <TaskDescriptionUserIcon log={data.data}/>
        <TaskDescriptionContainer />
        {
            data.data.messages.map((message, _index) =>
                <TaskLogMessageContainer
                    key={_index}
                    messages={message}
                />
            )}
    </div>
}


let TaskDescriptionTitle = (log) =>{
    return  <div className="task-description-title-container">
        <div className="task-description-title-type">{log.type}</div>
        <div className="task-description-title">{log.title}</div>
        <div className="task-description-title-timestamp">{log.timestamp}</div>
    </div>
}

let TaskDescriptionUserIcon = (log) =>{
    return  <div className="task-description-user-icon"><img src={log.log.photo}/></div>

}
let TaskDescriptionContainer = () =>{
    return <div className="task-description-container">

        <div className="task-description-header-triangle"/>
        <div className="task-description-header">
            <div></div>
        </div>

        <div className="task-description-detail">
            <div></div>
        </div>

    </div>
}




class TaskLogMessageContainer extends Component {

    render() {

        let {messages, key} = this.props;

        return <div key={key} className="message-container">
            <div key={key} className="message with-process">
                <div className="header">
                    <div className="icon"><img src={messages.img}/></div>
                    <div className="detail">
                        <div className="timestamp">{messages.timestamp}</div>
                        <div className="username">@{messages.username}</div>
                    </div>
                    <div
                        onTouchStart={() => this.props.toggleProcessTimeline()}
                        onClick={() => this.props.toggleProcessTimeline()}
                        className="material-icons toggle">
                        cleared
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

    //state for 'complete'
    processStateColor_Complete = {
        backgroundColor:'blue',
        border:'solid 1px white',
        borderRadius:'5px',
        padding:'3px'
    }

    //state for 'closed'
    processStateColor_Closed = {
        backgroundColor:'red',
        border:'solid 1px white',
        borderRadius:'5px',
        padding:'3px'
    }



    render() {
        let {key, process} = this.props;
        let styleState = this.processStateColor_Complete;

        //change style depends on process state
        if(process.state === 'closed') styleState = this.processStateColor_Closed;

        return <div key={key} className="process-unit-container">
            <div className="process-unit">

                <div className="icon">
                    <i className="material-icons p-types">{process.types}</i>
                </div>

                <div className="detail">
                    <div className="p-timestamp">{process.timestamp}</div>
                    <div className="p-username">@{process.username}</div>
                    <div className="p-messages">{process.message}</div>
                    <div className="p-state">
                        <span style={styleState}>{process.state}</span>
                    </div>

                </div>

            </div>
        </div>

    }
}
