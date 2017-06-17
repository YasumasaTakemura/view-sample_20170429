/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import Select from 'react-select';
import pickerMapper from '../shared/picker_options'
const _styles = {
    subContainer: {padding: 5}
};

function getOptions(options) {
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
};

const Picker = (props)=> {
    const {styles, update,stateVal,name, keyName} = props;
    const options = getOptions(keyName);

    return <div style={_styles.subContainer}>
        <div style={styles.header}>{name}</div>
        <Select value={stateVal || options[0].value} onChange={(e)=>update(keyName,e.label)} options={options}/>
    </div>
};


export default Picker