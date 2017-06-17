/**
 * Created by YasumasaTakemura on 2017/05/29.
 */
import React, {Component} from 'react';

let style ={
    marginTop:'50px',
    test:{
        marginTop:'50px',
        backgroundColor:'white',
        height:'50px'
    },
};


export class APIMarketConsole extends Component {

    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div style={style}>
                AAAAA
                <input/>
            </div>
        )
    }
}