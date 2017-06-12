/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component, PropTypes} from 'react';
// import {container} from '../../componets/navigation/navigation'

export default class renderNavigation extends Component{

    navItems = [

        {name: 'tasks', uri: 'tasks'},
        {name: 'schedule', uri: 'schedule'},
        {name: 'storage', uri: 'storage'},
        {name: 'documents', uri: 'docs'},
        {name: 'goals', uri: 'goals'},
    ]


    render(){
        return <div style={{backgroundColor:'#435052'}}>
            {/*{container(this.navItems)}*/}
            {this.props.children}
            </div>
    }
}

export class NavigationRoot extends Component{

    render(){
        return <div>
            {this.props.children}
        </div>
    }
}