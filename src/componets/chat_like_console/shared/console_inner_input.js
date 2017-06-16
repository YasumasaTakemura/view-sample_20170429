/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';

export const ConsoleInnerInput = (props)=>{

    const {defaultInputStyle,label,consoleWidth} = props
    const styles={
        space:{
            marginTop:10,
            backgroundColor:'white',
        }

    }
    return <div style={defaultInputStyle}>
                <div style={styles.space}/>
                <input style={{width:'inherit'}} onChange={(e) => props.taskListUpdater(e.target.value)}/>
                <label style={{marginLeft:20}}> {label} </label>
            </div>

}
