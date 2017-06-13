/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';
import {ConsoleInnerInput} from './console_inner_input'
import {LoadingComponent} from '../shared_components/loading';
export class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    message: 'teste test test',
                    username: 'test man',
                    user_id: 0,
                    timestamp: '2017/06/12'
                }, {
                    message: 'my message is this below',
                    username: 'youu',
                    user_id: 1,
                    timestamp: '2017/06/12'
                }, {
                    message: 'this message is mine toooo',
                    username: 'youu',
                    user_id: 1,
                    timestamp: '2017/06/12'
                }, {
                    message: 'this is the last',
                    username: 'test man',
                    user_id: 0,
                    timestamp: '2017/06/12'
                },{
                    message: 'teste test test',
                    username: 'test man',
                    user_id: 0,
                    timestamp: '2017/06/12'
                }, {
                    message: 'my message is this below',
                    username: 'youu',
                    user_id: 1,
                    timestamp: '2017/06/12'
                }, {
                    message: 'this message is mine toooo',
                    username: 'youu',
                    user_id: 1,
                    timestamp: '2017/06/12'
                }, {
                    message: 'this is the last',
                    username: 'test man',
                    user_id: 0,
                    timestamp: '2017/06/12'
                },
            ]
        }

    }

    getUserIcon() {
        return 'https://image.flaticon.com/icons/svg/118/118793.svg'
    }


    render() {
        const label = 'send';

        //dynamic style
        const styles = {
            container: {
                height: '100%',
                overflow:'auto',
                bottom:50,
                paddingBottom:50,


            },
            messageContainer: {
                display: 'flex',
                flexDirection: 'column'
            },
        }

        return <div style={styles.container}>
            <MessageContainer styles={styles} messages={this.state.messages} getUserIcon={this.getUserIcon}/>
            <ConsoleInnerInput label={label} defaultInputStyle={this.props.defaultInputStyle} {...this.props}/>
        </div>
    }

}


const MessageContainer = (props)=> {
    const {messages, styles} = props;

    return <div style={styles.messageContainer}>
        {messages.map((item,index)=>{
            if(index+1===messages.length)return <LoadingComponent/>;
            return <MessageBox length={messages.length} message={item} index={ index } {...props}/>
        })}
    </div>
}

const MessageBox = (props)=> {
    const {message, getUserIcon,index,length} = props;

    const styles = {
        container: {
            display:'flex',
            width:'100%'
        },
        lastContainer: {
            display:'flex',
            width:'100%',
            marginBottom:100,
        },
        icon:{
            flex:1,
            alignSelf:'center'
        },
        box:{
            flex:9,
            width:'100%',
            backgroundColor: '#E6EBF1',
            margin: 10,
            padding: 5,
            borderRadius: 5,
        }
    };

    return <div style={styles.container}>
        <div style={styles.icon}>
            <img style={{width: 30, height: 30}} src={getUserIcon(message.user_id)}/>
        </div>

        <div style={styles.box}>
            <div>{message.username}</div>
            <div>{message.message}</div>
            <div>{message.timestamp}</div>
        </div>

    </div>
};



