/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
import React, {Component} from 'react';
import './tasklog_timeline.css'
import ReactMarkdown from 'react-markdown'


//parent component
export class TaskLogTimeLine extends Component {
    render() {
        let {data, filteredData, index, input} = this.props

        if(data[index].logs.length === 1) return <div> no data </div>
        if (!input) return <TaskLogTimeLineWithData data={data[index]}/>
        return <TaskLogTimeLineWithFilteredData data={filteredData[index]}/>
    }
}

//child
let TaskLogTimeLineWithData = (props)=>{
    let data = props.data
    return <div className="task-log-container-adjustment">
        <TaskLogDescriptionUserIcon log={data}/>
        <TaskLogDescriptionContainer log={data}/>
        {
            data.logs.map((log, _index) =>
                <TaskLogProcessContainer
                    key={_index}
                    process={log}
                />
            )}
    </div>
}


//child
let TaskLogTimeLineWithFilteredData = (props)=>{
    let data = props.data
    return <div className="task-log-container-adjustment">
        <TaskLogDescriptionUserIcon log={data}/>
        <TaskLogDescriptionDetail log={data}/>
        {
            data.logs.map((log, _index) =>
                // this was TaskLogMessageContainer
                <TaskLogProcessContainer
                    key={_index}
                    process={log}
                />
            )}
    </div>
}

//parent
let TaskLogDescriptionContainer = (props) =>{
    let log = props.log
    return <div className="task-description-container">

        <div className="task-description-header-triangle"/>
        <div className="task-description-header">
            <TaskLogDescriptionTitle log={log}/>
        </div>

        <div className="task-description-detail">
            <TaskLogDescriptionDetail log={log}/>
        </div>

    </div>
}

//child
let TaskLogDescriptionTitle = (props) =>{
    let log = props.log

    return  <div className="task-description-title-container">
        {/*<div className="task-description-title-type">{log.type}</div>*/}
        <div className="task-description-title">{log.title}</div>
        {/*<div className="task-description-title-timestamp">{log.timestamp}</div>*/}
    </div>
}

//child
let TaskLogDescriptionDetail = (props) =>{
    let log = props.log

    return  <div className="task-description-body-container">
        {/*<div className="task-description-title-type">{log.type}</div>*/}
        <div className="task-description-body">
            <ReactMarkdown source={log.description}/>
            </div>
        {/*<div className="task-description-title-timestamp">{log.timestamp}</div>*/}
    </div>
}


//parent
let TaskLogProcessContainer= (props)=> {
    let {process, key} = props

    return <div key={key} className="process-container">
        <div key={key} className="process">
            <TaskLogProcessActionContainer process={process} key={key}/>
        </div>
    </div>

}


let TaskLogDescriptionUserIcon = (log) =>{
    return  <div className="task-description-user-icon">
        <img src={log.log.photo}/>
    </div>
}


let TaskLogProcessActionContainer = (props)=>{

    //state for 'complete'
    let processStateColor_Complete = {
        backgroundColor:'blue',
        border:'solid 1px white',
        borderRadius:'5px',
        padding:'3px'
    }

    //state for 'closed'
    let processStateColor_Closed = {
        backgroundColor:'red',
        border:'solid 1px white',
        borderRadius:'5px',
        padding:'3px'
    }

    let {process} = props;
    let style = processStateColor_Complete;

    //change style depends on process state
    if(process.state === 'closed') style = processStateColor_Closed;

    return <TaskLogProcessAction { ...props}/>
}

let TaskLogProcessAction= (props)=>{
    let {key, process,style} = props;

    return <div key={key} className="process-unit-container">
        <div className="process-unit">

            <div className="icon">
                <i className="material-icons p-types">{process.types}</i>
            </div>

            <div className="detail">
                <div className="p-photo"><img src={process.img} />
                <div className="p-timestamp">{process.timestamp}</div>
                <div className="p-username">@{process.username}</div>
                <div className="p-messages">{process.message}</div>

                </div>
                <div className="p-state">
                    {/*<span style={style}>{process.state}</span>*/}
                </div>
            </div>
        </div>
    </div>

}

// class TaskLogProcessAction extends Component {
//
//     //state for 'complete'
//     processStateColor_Complete = {
//         backgroundColor:'blue',
//         border:'solid 1px white',
//         borderRadius:'5px',
//         padding:'3px'
//     }
//
//     //state for 'closed'
//     processStateColor_Closed = {
//         backgroundColor:'red',
//         border:'solid 1px white',
//         borderRadius:'5px',
//         padding:'3px'
//     }
//
//
//
//     render() {
//         let {key, process} = this.props;
//         let styleState = this.processStateColor_Complete;
//
//         //change style depends on process state
//         if(process.state === 'closed') styleState = this.processStateColor_Closed;
//
//         return <div key={key} className="process-unit-container">
//             <div className="process-unit">
//
//                 <div className="icon">
//                     <i className="material-icons p-types">{process.types}</i>
//                 </div>
//
//                 <div className="detail">
//                     <div className="p-timestamp">{process.timestamp}</div>
//                     <div className="p-username">@{process.username}</div>
//                     <div className="p-messages">{process.message}</div>
//                     <div className="p-state">
//                         <span style={styleState}>{process.state}</span>
//                     </div>
//
//                 </div>
//
//             </div>
//         </div>
//
//     }
// }
