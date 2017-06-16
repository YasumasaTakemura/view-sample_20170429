/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import Input from '../../chat_like_console/shared/input';
import Picker from '../../chat_like_console/shared/picker';
import Selector from '../../chat_like_console/shared/selector';
import Submit from '../../chat_like_console/shared/submit';


class Deploy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: {},
            api_name: '',
        };
    }

    updateValue(keyName, obj) {
        const OBJ = {};
        OBJ[keyName] = obj;
        this.setState(OBJ);
        this.payload = Object.assign({}, this.payload, OBJ)
    }

    render() {
        const {
            zip,
            api_name,
        } = this.state;

        const {consoleWindowSize} = this.props;

         const styles = {
            container: {
                 height: '100%',
                overflow: 'auto',
                width:consoleWindowSize,

            },
            subContainer: {
                // padding:10
            },
            header: {
                width: '90%',
            },
            input: {
                width: '90%',
                height: 20,
            },
            mlInput: {
                width: '90%',
                height: 40,
            },
            submit: {
                backgroundColor: 'pink',
                color: 'white',
                borderRadius: 5,
                textAlign: 'center',
                bottom: 5,
                width: consoleWindowSize * 0.9,
                padding: 5,

            },
            space:{
                height:70,
            }

        };

        const _props = {
            update: this.updateValue.bind(this),
            styles: styles
        };

        return <div style={styles.container}>
                <Input name={'Api Name'} keyName={'api_name'} {..._props}/>
                <Input type="file" name={'Deploy'} keyName={'zip'} {..._props}/>
                <Submit name={'Submit'} payload={this.state} domain={'deploy'} styles={styles}/>
        </div>
    }
}

export default Deploy
