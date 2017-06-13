/**
 * Created by YasumasaTakemura on 2017/04/30.
 */

import React, {Component} from 'react'
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, compose, combineReducers} from 'redux'

import {data} from '../store/reducer/data'
import  {NavigationRoot} from '../containers/navigation/navigation'
import  APIMarket from '../containers/api_market/api_market'
import  Marketplace from '../containers/marketplace/marketplace'
import  {Top} from '../componets/api_market/top'
import  {TaskManager} from '../store/connects'



const reducers = combineReducers({
    data,
});

const history = createHistory()
export let store = createStore(reducers,
    compose(window.devToolsExtension && window.devToolsExtension()));


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router history={history}>
                    <NavigationRoot>
                        <Route exact path='/tasks' component={TaskManager}/>
                        <Route exact path='/navi' component={TaskManager}/>
                        <Route exact path='/marketplace/:app_id' component={Marketplace}/>
                        <Route exact path='/marketplace' component={Marketplace}/>
                        <Route exact path='/apiMarketTop' component={Top}/>

                    </NavigationRoot>


                </Router>
            </Provider>
        )
    }
}