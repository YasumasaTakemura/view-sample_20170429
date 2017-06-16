/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import Input from '../../chat_like_console/shared/input';
import Picker from '../../chat_like_console/shared/picker';
import Selector from '../../chat_like_console/shared/selector';
import Submit from '../../chat_like_console/shared/submit';


class MyAPIConsoleContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consoleState: this.props.consoleState ? this.props.consoleState : false,
        };
    }

    render(){

        const styles={};

        return <div>

            <div style={styles}>Api Name</div>

            <Input/>
            <Submit/>

            <div style={styles}></div>

        </div>
    }
}

export default MyAPIConsoleContent