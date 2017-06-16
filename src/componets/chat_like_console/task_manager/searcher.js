/**
 * Created by YasumasaTakemura on 2017/06/12.
 */
import React, {Component} from 'react';
import {ConsoleInnerInput} from '../shared/console_inner_input'

export const Searcher = (props)=> {

    const label = 'find';

    return <div>
        <div> AAAAAA</div>
        <ConsoleInnerInput label={label} defaultInputStyle={props.defaultInputStyle} {...props}/>
    </div>
}
