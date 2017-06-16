/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';

export const ConsoleInnerInput = (props)=>{

    const {defaultInputStyle,label,consoleWindowSize} = props
    const styles={
        space:{
            marginTop:10,
            backgroundColor:'white',
        }

    }
    return <div style={defaultInputStyle}>
                <div style={styles.space}/>
                <input style={{width:consoleWindowSize*0.7}} onChange={(e) => props.taskListUpdater(e.target.value)}/>
                <label style={{margin:'0 0 0 20px',padding:'0 10x 0 0'}}> {label} </label>
            </div>

}
