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
    const {styles, update, name,keyName,modalHandler} = props;
    return <div onClick={()=>modalHandler(name)} style={_styles.subContainer}>
        <div style={styles.header}>{name}</div>

    </div>
};

export default Selector