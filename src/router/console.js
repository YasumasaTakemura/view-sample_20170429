/**
 * Created by YasumasaTakemura on 2017/06/22.
 */
import React, {Component} from 'react';
import Deploy from '../componets/console/my_api/depoloy'
import {CSSTransitionGroup} from 'react-transition-group'
import {Switch, Route,} from 'react-router-dom'
import {Chat} from '../componets/console/chat/chat_interface'
import Resister from '../componets/console/task_manager/resister'
import Searcher from '../componets/console/task_manager/searcher'

const ConsoleRouter = (props)=> {

    return <Switch>
        <Route exact path='/tasks/search' render={()=><Searcher {...props}/>}/>
        <Route exact path='/tasks/chat' render={()=><Chat {...props}/>}/>
        <Route exact path='/tasks/resister' render={()=><Resister {...props}/>}/>
        <Route exact path='/marketplace/resister' render={()=><Chat {...props}/>}/>
        <Route exact path='/my_api/deploy' render={()=><Deploy {...props}/>}/>
        <Route path='/' render={()=><div> not contents </div>}/>
    </Switch>
};

export default ConsoleRouter
