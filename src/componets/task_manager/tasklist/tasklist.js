/**
 * Created by YasumasaTakemura on 2017/05/26.
 */
/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import './tasklist.css'

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