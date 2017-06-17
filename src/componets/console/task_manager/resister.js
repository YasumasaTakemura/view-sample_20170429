/**
 * Created by YasumasaTakemura on 2017/06/15.
 */

import React, {Component} from 'react';
import axios from 'axios'
import pickerMapper from '../shared/picker_options'
import Input from '../shared/input'
import Picker from '../shared/picker'
import Selector from '../shared/selector'
import Scheduler from '../shared/scheduler'
import Submit from '../shared/submit'

import {w,h} from '../../../utils/utils';

class Resister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen:false,
            templates: '',
            title: '',
            app: '',
            description: '',
            member: '',
            to: '',
            trigger: '',
            loop: '',
            status: '',
            category: '',
            period: '',
            schedule: '',
            dataStart: '',
            dataEnd: '',
        };

        this.payload = this.state;
        this.modalHandler = this.modalHandler.bind(this);
    }

    getAppID() {

    }

    getOptions(options) {
        switch (options) {
            case 'trigger':
                return pickerMapper.trigger;
            case 'status':
                return pickerMapper.status;
            case 'category':
                return pickerMapper.category;
            default :
                return [{value: 'one', label: 'ONE'}]

        }
    }

    updateValue(keyName, obj) {
        const OBJ = {};
        OBJ[keyName] = obj;
        this.setState(OBJ);
        this.payload = Object.assign({}, this.payload, OBJ)
    }

    modalHandler(element){
        console.log('>>>>>>')
        console.log(element)
        console.log(this.refs)
        this.setState({modalOpen:!this.state.modalOpen})

    }
    render() {

        const {
            modalOpen,
            templates,
            title,
            app,
            description,
            member,
            to,
            trigger,
            loop,
            status,
            category,
            period,
            schedule,
            dateStart,
            dateEnd,
        } = this.state;

        const {consoleWindowSize,consoleWidth}= this.props;

        //dynamic style
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



        return <div style={styles.container} ref='temp'>

            <Picker name={'Templates'} keyName={'templates'} stateVal={templates} {...selector_props}/>
            <Input name={'Title'} keyName={'title'} {...input_props}/>
            <Input name={'Description'} ml={true} keyName={'description'} {...input_props}/>
            <Selector name={'Apps'} keyName={'app'} modalHandler={this.modalHandler} {...selector_props}/>
            <Selector name={'To'} keyName={'to'} {...selector_props}/>
            <Selector name={'Member'} keyName={'member'} modalHandler={this.modalHandler} {...selector_props}/>
            <Picker name={'Trigger'} keyName={'trigger'} clearable={false} stateVal={trigger} {...picker_props} />
            <Picker name={'Loop'} keyName={'loop'} stateVal={loop} {...picker_props}/>
            <Picker name={'Status'} keyName={'status'} stateVal={status} {...picker_props}/>
            <Picker name={'Category'} keyName={'category'} stateVal={category} {...picker_props}/>
            <Scheduler name={'Schedule'} {...input_props}/>
            <Scheduler name={'Period'} {...input_props}/>
            <div style={styles.space}/>

            <Submit name={'Submit'} domain='submit/tasks' styles={styles}/>

            <FindMemberModal title={'Submit'} modalOpen={modalOpen} modalHandler={this.modalHandler} {...this.props}/>
        </div>
    }

}


//////////////////////////////
//////////////////////////////
//////////////////////////////


const FindMemberModal = (props)=> {
    const {styles, title,_input,consoleWidth,modalOpen,modalHandler} = props;

    const modal = {
        container: {},
        show: {
            position: 'fixed',
            height: h,
            transition: 'bottom .3s',
            backgroundColor: 'rgba(200,200,200,0.9)',
            // backgroundColor: 'white',
            width: consoleWidth,
            bottom:0,
            // opacity:0.7
        },

        hidden: {

            // zIndex: 200,
            position: 'fixed',
            height: h,
            transition: 'bottom .3s',
            backgroundColor: '#F6F8FA',
            width: consoleWidth,
            bottom: -h,
        }
    };

    const modal2 = {
        container: {},
        show: {
            zIndex: -10,
            position: 'fixed',
            top: 0,
            height: '100%',
            transition: 'right .5s',
            backgroundColor: 'white',
            width: consoleWidth*1.5,
            right: 0,
            borderLeft:'solid 5px #4B5F7C',

        },

        hidden: {

            zIndex: -10,
            position: 'fixed',
            top: 0,
            height: '100%',
            transition: 'right .5s',
            backgroundColor: 'white',
            width: consoleWidth*1.5,
            right: -consoleWidth*1.5,
        }
    };

    return <div style={modalOpen?modal.show:modal.hidden}>
        <div style={{backgroundColor:'white'}}>{title}</div>
      content of the modal

        <div style={{position:'absolute',right:50,top:0,marignRight:10}} onClick={()=>modalHandler()}>close</div>
        <input/>
        <input style={styles.input} onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Description = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>Description</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Apps = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>Apps</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Member = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Member</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Trigger = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Trigger</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Loop = (props)=> {
    const {styles} = props;
    return <div style={styles.subContainer}>
        Loop</div>
};

const Status = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Status</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Category = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Category</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Period = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Period</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Schedule = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles}>Schedule</div>
        <input onChange={(e)=>_input(e.target.value)}/>
    </div>
};


export default Resister

