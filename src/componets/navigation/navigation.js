/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import * as css from './navigation.css'

function renderItems(items) {
    return (
        <div className="nav-container">
            <div className="left">

            {items.map((item, index) =>
                <Link  to={item.uri} >
                    <div  className='nav-items' >
                        {item.name}
                    </div>
                </Link>
            )}
            </div>
            <div className="right">
                <Link  to='/top' className='nav-items'>
                    <div  className='nav-items' >
                        usr
                    </div>
                </Link>
            </div>
        </div>
    )

}

export function container(links) {
    return (
        <div>
            {renderItems(links)}
        </div>
    )

}



