/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import axios from 'axios'

function submit(domain,payload) {
    const endpoint ='https://'+'/'+domain+'';
    console.log(endpoint)
    // axios.post(endpoint,payload)
}

const _styles = {
    padding: 10,
    height: 30,
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
};

const Submit = (props)=> {
    const {styles, name,domain,payload} = props;
    return <div style={_styles}>
        <div style={styles.submit} onClick={()=>submit(domain,payload)}>{name}</div>
    </div>
};

export default Submit
