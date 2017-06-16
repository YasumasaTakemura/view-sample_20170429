/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import axios from 'axios'

import {ConsoleContainer, AppList, KPIs, Graph, QuitModal} from '../index';

export default class MyApps extends Component {
    constructor() {
        super();
        this.state = {
            quit: false,
            currency: 'usd',
            apps: [
                {
                    app_id: 0,
                    price: [0, 5, 0, 0],
                    month: [0, 10, 10, 10, 10],
                    t_fee: [0, 5, 12, 2, 1],
                    fq: [0, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 5,
                    price: [15, 0, 0, 0],
                    month: [5, 5, 5, 5, 5],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [30, 0, 0, 0],
                    month: [7, 7, 7, 7, 7],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [0, 5, 0, 0],
                    month: [0, 10, 10, 10, 10],
                    t_fee: [0, 5, 12, 2, 1],
                    fq: [0, 565, 1234, 243, 102],
                    currency: 'usd',

                }, {
                    app_id: 5,
                    price: [15, 0, 0, 0],
                    month: [5, 5, 5, 5, 5],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [30, 0, 0, 0],
                    month: [7, 7, 7, 7, 7],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                },
            ]
        }
    }

    toggleQuitModal() {
        this.setState({quit: !this.state.quit})

    }

    render() {
        const {apps, quit,currency} = this.state;
        const styles = {
            consoleContainer: {
                zIndex: 100,
                position: 'fixed',
                top: 0,
                height: '100%',
                transition: 'right .5s',
                backgroundColor: 'white',
            },

            container: {
                width: '90%',
                margin: '0 auto'
            },
        };

        return <div>
            <ConsoleContainer />
            <KPIs apps={apps} currency={currency} styles={styles}/>
            {/*<Graph apps={apps}/>*/}
            <AppList apps={apps} toggleQuitModal={this.toggleQuitModal.bind(this)} styles={styles.container}/>

            <QuitModal show={quit} toggleQuitModal={this.toggleQuitModal.bind(this)}/>

        </div>
    }

}