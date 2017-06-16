/**
 * Created by YasumasaTakemura on 2017/06/15.
 */

import React, {Component} from 'react';
import axios from 'axios'
import './resister/resister.css'
import pickerMapper from './resister/picker_options'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Resister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            app:'',
            description:'',
            member:'',
            trigger:'',
            loop:'',
            status:'',
            category:'',
            period:'',
            schedule:'',
        };

        this.payload = this.state;
    }


    resisterTasks() {
        console.log(this.state)
        console.log(this.payload)
        // axios.post()
    }

    getAppID() {

    }

    // inputTitle(e) {
    //     this.payload.title = e
    // }
    //
    // inputApps(e) {
    //     this.payload.apps = e
    // }
    //
    // inputDescription(e) {
    //     this.payload.destination = e
    // }
    //
    // inputMember(e) {
    //     this.payload.member = e
    // }
    //
    // inputTrigger(e) {
    //     this.payload.title = e
    // }
    //
    // inputLoop(e) {
    //     this.payload.loop = e
    // }
    //
    // inputStatus(e) {
    //     this.payload.status = e
    // }
    //
    // inputCategory(e) {
    //     this.payload.category = e
    // }
    //
    // inputPeriod(e) {
    //     this.payload.period = e
    // }
    //
    // inputSchedule(e) {
    //     this.payload.schedule = e
    // }

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

    updateInputValue(keyName,obj){
        const OBJ = {}
        OBJ[keyName] = obj
        console.log(OBJ)
        this.setState(OBJ)
        this.payload =Object.assign({},this.payload,OBJ)
    }

    updatePickerValue(keyName,obj){
        const OBJ = {}
        OBJ[keyName] = obj.label
        this.setState(OBJ)
        this.payload =Object.assign({},this.payload,OBJ)
    }

    render() {
        const label = 'resister';

        const {
            title,
            app,
            description,
            member,
            trigger,
            loop,
            status,
            category,
            period,
            schedule,} = this.state;

        //dynamic style
        const styles = {
            container: {
                height: '100%',
                overflow: 'auto',
                bottom: 50,
                width: '100%',
                padding:'10px 0 10px 10px'
                // position:'relative'
            },
            subContainer: {
                width: '90%',
                margin:'5px 0 5px 0'
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
                position: 'absolute',
                bottom: 0,
                margin: '0 auto',
                width: '70%',
                padding: '0 10 0 10'
            },

        };

        const input_props = {
            update: this.updateInputValue.bind(this),
            styles: styles
        };

        const picker_props = {
             getOptions: this.getOptions,
             update: this.updatePickerValue.bind(this),
            styles: styles,
            ...this.state
        };

        const selector_props = {
            update: this.updateInputValue.bind(this),
            styles: styles
        };

        return <div style={styles.container}>

            {/*<Title _input={this.inputTitle.bind(this)} styles={styles}/>*/}
            <Input name={'Title'} keyName={'title'} {...input_props}/>
            <Input name={'Description'} ml={true} keyName={'description'} {...input_props}/>
            <Selector name={'Apps'} keyName={'app'} {...selector_props}/>
            <Selector name={'Member'} keyName={'member'} {...selector_props}/>
            <Picker name={'Trigger'} keyName={'trigger'} clearable={false} stateVal={trigger} {...picker_props} />
            <Picker name={'Loop'} keyName={'loop'} stateVal={loop} {...picker_props}/>
            <Picker name={'Status'} keyName={'status'} stateVal={status} {...picker_props}/>
            <Picker name={'Category'} keyName={'category'} stateVal={category} {...picker_props}/>
            <Scheduler name={'Schedule'} {...input_props}/>
            <Scheduler name={'Period'} {...input_props}/>
            <Submit resisterTasks={this.resisterTasks.bind(this)} styles={styles}/>

            {/*<Trigger _input={this.inputTrigger.bind(this)} styles={styles} />*/}
            {/*<Loop _input={this.inputLoop.bind(this)} styles={styles} />*/}
            {/*<Status _input={this.inputStatus.bind(this)} styles={styles} />*/}
            {/*<Category _input={this.inputCategory.bind(this)} styles={styles} />*/}
            {/*<Schedule _input={this.inputSchedule.bind(this)} styles={styles} />*/}
            {/*<Period _input={this.inputPeriod.bind(this)} styles={styles} />*/}


        </div>
    }

}


const Input = (props)=> {
    const {styles, update, name,keyName,ml=false} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>{name}</div>
        {ml?
            <textarea style={styles.mlInput} onChange={(e)=>update(keyName,e.target.value)}/>:
                <input style={styles.input} onChange={(e)=>update(keyName,e.target.value)}/>}

    </div>
};

const Selector = (props)=> {
    const {styles, update, name,keyName} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>{name}</div>
        <input style={styles.input} onChange={(e)=>update(keyName,e.target.value)}/>
    </div>
};

const Picker = (props)=> {
    const {styles, getOptions, update,stateVal,name, keyName} = props;
    const options = getOptions(keyName);

    return <div style={styles.subContainer}>
        <div style={styles.header}>{name}</div>
        <Select value={stateVal || options[0].value} onChange={(e)=>update(keyName,e)} options={options}/>
    </div>
};

const Scheduler = (props)=> {
    const {styles, _input, name} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>{name}</div>
        <input style={styles.input} onChange={(e)=>_input(e.target.value)}/>
    </div>
};

const Submit = (props)=> {
    const {styles,resisterTasks} = props;
    return <div onClick={()=>resisterTasks()} style={styles.submit}>SUBMIT</div>
};


const Title = (props)=> {
    const {styles, _input} = props;
    return <div style={styles.subContainer}>
        <div style={styles.header}>Title</div>
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

