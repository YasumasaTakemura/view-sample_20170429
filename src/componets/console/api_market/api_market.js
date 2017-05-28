/**
 * Created by YasumasaTakemura on 2017/05/29.
 */
import React, {Component} from 'react';

let style ={
    marginTop:'50px'
}

export function renderComponent(component) {
   return class RenderComponent extends Component {

        render() {
            return (
                <component {...this.props}/>
            )
        }
    }
}

export class APIMarketConsole extends Component {

    render() {
        return (
            <div style={style}>
                AAAAA
                <input/>
            </div>
        )
    }
}