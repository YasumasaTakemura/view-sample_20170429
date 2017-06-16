/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const _styles = {
    subContainer: {padding: 5}
};


const Selector = (props)=> {
    const {styles, update, name,keyName} = props;
    return <div style={_styles.subContainer}>
        <div style={styles.header}>{name}</div>
        <input style={styles.input} onChange={(e)=>update(keyName,e.target.value)}/>
    </div>
};

export default Selector