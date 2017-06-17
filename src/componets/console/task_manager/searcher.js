/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';
import {ConsoleInnerInput} from '../shared/console_inner_input'
import pickerMapper from '../shared/picker_options'
import Input from '../shared/input'
import Picker from '../shared/picker'
import Selector from '../shared/selector'
import Scheduler from '../shared/scheduler'
import Submit from '../shared/submit'

class Searcher extends Component{
    constructor(props) {
        super(props);
        this.state = {

            templates:'',
            title:'',
            app:'',
            username:'',
            member:'',
            state:'',
            status:'',
            category:'',
            schedule:'',
            deadline:''
        };

        this.payload = this.state;
    }



    updateValue(keyName,obj){
        const OBJ = {};
        OBJ[keyName] = obj;
        this.setState(OBJ);
        this.payload =Object.assign({},this.payload,OBJ)
    }


    render() {
        const {consoleWindowSize} = this.props;
        const {
            templates,
            title,
            app,
            description,
            member,
            to,
            trigger,
            state,
            status,
            category,
            period,
            schedule,
            deadline,
        } = this.state;


        const styles = {
            container: {
                height: '100%',
                overflow: 'auto',
                width: consoleWindowSize,

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
            space: {
                height: 70,
            }

        };

        const input_props = {
            update: this.updateValue.bind(this),
            styles: styles
        };

        const picker_props = {
            getOptions: this.getOptions,
            update: this.updateValue.bind(this),
            styles: styles,
            ...this.state
        };

        const selector_props = {
            update: this.updateValue.bind(this),
            styles: styles
        };


        return <div style={styles.container}>

            <Input name={'Member'} keyName={'member'} {...input_props}/>
            <Input name={'Title'} keyName={'title'} {...input_props}/>
            <Input name={'Username'} keyName={'username'} {...input_props}/>
            <Selector name={'Apps'} keyName={'app'} {...selector_props}/>
            <Picker name={'State'} keyName={'state'} stateVal={state} {...picker_props}/>
            <Picker name={'Status'} keyName={'status'} stateVal={status} {...picker_props}/>
            <Picker name={'Category'} keyName={'category'} stateVal={category} {...picker_props}/>
            <Scheduler name={'Schedule'} range={true} {...input_props}/>
            <Scheduler name={'Deadline'} keyName={'deadline'} stateVal={deadline} {...input_props}/>
            <div style={styles.space}/>

            <Submit name={'Submit'} domain='search/task_manager' styles={styles}/>
        </div>
    }
}

export default Searcher
