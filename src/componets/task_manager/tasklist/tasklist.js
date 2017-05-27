/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import './tasklist.css'


let TaskListItem = (_item,index,showLogs)=> {

    let item = _item.item;
    return (
        <li
            key={index}
            onClick={() => showLogs(item, index)}
            className="task-list-item">

            <div className="task-list-item-header">
                <div className="task-list-item-timestamp">{item.timestamp}</div>
                <div className="task-list-item-type">{item.type}</div>

            </div>

            <div className="task-list-item-detail">
                <div className="task-list-item-username">@{item.username}</div>
                <div className="task-list-item-title">{item.title}</div>
            </div>

        </li>)
}


export class TaskListContainer extends Component {
    render(){
        console.log(this.props)
        console.log(this.props.input)
        // no filtered data exist
        if (this.props.input === "" )this.data = this.props.data
        else this.data = this.props.filteredList('title')

        return <ul>
            { this.data.map((item, index) => <TaskListItem index={index} item={item} showLogs={this.props.showLogs}/>)}
                </ul>

    }
}
