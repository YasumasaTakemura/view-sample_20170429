/* Created by YasumasaTakemura on 2017/05/26.*/

import React, {Component} from 'react';
import './tasklist.css'
const hurry = require('../../../../img/hurry.svg');
const immediately = require('../../../../img/immediately.svg');
const check = require('../../../../img/question.png');
const input = require('../../../../img/request.jpg');

const mapper = {
    immediately: immediately,
    hurry: hurry,
    check: check,
    input: input,
};


export class TaskListContainer extends Component {

    state = {
        state: 'non'
    }

    data = this.props.data;
    style = {

        init: {
            borderColor: '#f9df2c',
            borderWidth: '1px',
            // borderStyle:'solid 1px #f9df2c'
        },
        hover: {
            borderColor: '#f9df2c',
            borderWidth: '1px',
            // borderStyle:'solid 1px #f9df2c'
        },
        active: {
            borderColor: '#f9df2c',
            borderWidth: '1px',
            // borderStyle:'solid 1px #f9df2c'
        }
    };


    render() {
        const styles = {
            container: {
                marginTop: 20,
            },
            subContainer: {
                display: 'flex',
                flexDirection: 'column',
                borderBottom: 'solid 3px white',
                padding: 5,
            },
            body: {
                display: 'flex',
                alignItems: 'center',
            },
            icons: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                flex: 2,
            },
            userIcon: {
                borderRadius: '50%',
                width: 40,
                height: 40,
            },
            middle: {
                display: 'flex',
                flexDirection: 'column',
                flex: 5,
            },
            timestamp: {
                // flex: 2,
            },
            username: {
                // flex: 2,
            },
            title: {
                // flex: 2,
            },
            status: {
                width: 18,
                height: 18,
                margin:'0 0 10px 0',
                // marginBottom:5
            },
            category: {
                width: 18,
                height: 18,
                margin:'0 0 10px 0',
            },
        };

        const {state} =this.state;
        const {input, data, filteredList, showLogs} =this.props;

        // no keyword inputted
        if (input === "") this.data = data;
        else this.data = filteredList('title');

        return <div style={styles.container}>
            { this.data.map((item, index) => <Item index={index} item={item} showLogs={showLogs}
                                                   styles={styles}/>)}
        </div>
    }
}

let TaskListItem = (props)=> {
    let {index, item, showLogs, style} = props;

    return (
        <div
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

        </div>)
};

const Item = (props)=> {
    let {index, item, showLogs, styles} = props;
    return <div
        style={styles.subContainer}
        key={index}
        onClick={() => showLogs(item, index)}
    >
        <div style={styles.body}>
            <UserIcon styles={styles} item={item}/>
            <Details styles={styles} item={item}/>
            <Icons styles={styles} item={item}/>
        </div>


    </div>

};

const UserIcon = (props)=> {
    const {styles, item} = props;
    return <div style={{flex: 2,}}><img style={styles.userIcon} src={item.photo}/></div>

};

const Icons = (props)=> {
    const {styles, item} = props;
    const status = item.status;
    const category = item.category;

    return <div style={styles.icons}>
        <div style={styles.status}>
            {status?<Status styles={styles.status} status={item.status}/>:null}
            </div>
        <div style={styles.category}>
            {category.length >0?<Category styles={styles.category} category={item.category}/>:null}
        </div>

        {/*{status? <div style={styles.status}><Status styles={styles.status} status={item.status}/></div> : null}*/}
        {/*{category.length >0?*/}
            {/*<div style={styles.category}><Category styles={styles.category} category={item.category}/></div> : null}*/}
    </div>

};

//child of Icons
const Status = (props)=> {
    const {styles, status} = props;
    return <div style={{marginBottom: 5}}>
        <img style={styles} src={`${mapper[status]}`}/>
    </div>

};
//child of Icons
const Category = (props)=> {
    const {styles, category} = props;
    return <span style={{display: 'flex'}}>
        {category.map((item)=><img style={styles} src={`${mapper[item]}`}/>)}
    </span>

};


const Details = (props)=> {
    const {styles, item} = props;

    return <div style={styles.middle}>
        <div style={styles.timestamp}>{item.timestamp}</div>
        <div style={styles.username}>@{item.username}</div>
        <div style={styles.title}>{item.title}</div>
    </div>
};
