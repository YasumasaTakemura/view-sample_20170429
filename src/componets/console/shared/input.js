/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';

const _styles = {
    subContainer: {
        padding: 5
    }
};

const Input = (props)=> {
    const {styles, update, name, keyName, ml = false, type = 'text'} = props;

    return <div style={_styles.subContainer}>
        <div style={styles.header}>{name}</div>
        {ml ?
            <textarea style={styles.mlInput} onChange={(e)=>update(keyName, e.target.value)}/> :
            <input type={type} style={styles.input} onChange={(e)=>update(keyName, e.target.value)}/>
        }

    </div>
};

export default Input