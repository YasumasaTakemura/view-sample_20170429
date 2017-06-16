/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,  Link, NavLink, withRouter
} from 'react-router-dom'
import {Chat} from './chat_interface'
import Resister from '../task_manager/resister'
import {Searcher} from '../task_manager/searcher'

export class NavigationTab extends Component {

    state={
        id:'chat'
    };

    updateFocus(id){

        this.setState({id:id});

    }

    render() {
        const {clickedID, innerNavigatorBarProps,tab, changeTab,path} = this.props;
        const {_id} = this.state;
        const tabs = innerNavigatorBarProps.tabs;
        const mapper = innerNavigatorBarProps.mapper;
        const tabWidth = 100 / tabs;
        const fontSize = 10;

        const styles = {
            clicked: {
                color: 'white',
                backgroundColor: '#4B5F7C',
                width: `${tabWidth}%`,
                fontSize: fontSize,
            },
            unClicked: {
                width: `${tabWidth}%`,
                fontSize: fontSize,
            },
            container: {
                color: '#4B5F7C',
                backgroundColor: 'white',
                border: 'solid #4B5F7C',
                borderWidth: '1px 0 1px 0 ',
                display: 'flex',
                justifyContent: 'space-between',
                textAlign: 'center',
            }
        };

        console.log(tab)

        return <div style={styles.container}>
            {tab.map((item)=> <Link to={`/${path}/${item.id}`}
                                       onClick={()=>this.updateFocus(item.id)}
                                       style={_id === item.id ? styles.clicked : styles.unClicked }>{item.text}</Link>)}

        </div>

    };
}


