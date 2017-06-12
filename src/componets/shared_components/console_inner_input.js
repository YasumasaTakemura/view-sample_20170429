/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';

export const ConsoleInnerInput = (props)=>{

    const {defaultInputStyle,label,consoleWidth} = props

    return <div style={defaultInputStyle}>
                <input style={{width:consoleWidth*0.7}} onChange={(e) => props.taskListUpdater(e.target.value)}/>
                <label style={{marginLeft:20}}> {label} </label>
            </div>

}
