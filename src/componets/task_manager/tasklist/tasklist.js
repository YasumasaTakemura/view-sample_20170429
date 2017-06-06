/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import './tasklist.css'

export class TaskListContainer extends Component {

    state={
    state:'non'
}

    data = this.props.data;
    style={

        init:{
            borderColor:'#f9df2c',
            borderWidth:'1px',
            // borderStyle:'solid 1px #f9df2c'
        },
        hover:{
            borderColor:'#f9df2c',
            borderWidth:'1px',
            // borderStyle:'solid 1px #f9df2c'
        },
        active:{
            borderColor:'#f9df2c',
            borderWidth:'1px',
            // borderStyle:'solid 1px #f9df2c'
        }
    };


    render(){
        var style ={};

        let state =this.state.state;

        // no keyword inputted
        if (this.props.input === "" )this.data = this.props.data;
        else this.data = this.props.filteredList('title');

        switch (state){
            case 'hover':
                style = this.style.hover;

            case 'active':
                style = this.style.hover;

            default:
                style = this.style.init;
        }

        return <ul>
            { this.data.map((item, index) => <TaskListItem index={index} item={item} showLogs={this.props.showLogs} style={this.style}/>)}
                </ul>
    }
}

let TaskListItem = (props)=> {
    let {index,item,showLogs,style} = props;

    return (
        <li
            key={index}
            onClick={() => showLogs(item, index)}
            className="task-list-item">

            <div className="task-list-item-header">
                <div className="task-list-item-photo">
                    <img className="icon" src={item.photo}/>
                </div>
            </div>

            <div className="task-list-item-detail">
                <div className="task-list-item-detail-top">
                    <div className="task-list-item-username">@{item.username}</div>
                    <div className="task-list-item-timestamp">{item.timestamp}</div>
                </div>

                <div className="task-list-item-detail-bottom">
                    <div className="task-list-item-title">{item.title}</div>
                </div>
            </div>

        </li>)
}

let TaskListItemOnHover=()=>{

}


class Style{
    onHover = {
        borderColor:'',
        borderWidth:'',
        borderStyle:'solid 1px #F9DF2C'
    }

    onActive = {
        marginBottom:'4px',
    }

}