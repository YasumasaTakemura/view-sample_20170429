/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import axios from 'axios'
import {ConsoleContainer,Footer} from '../index';
import {Rankings} from '../../componets/marketplace/rankings'
import {AdHeaderContainer} from '../../componets/marketplace/ad_header'
// import {ConsoleContainer}  from '../../componets/console/console'
import './marketplace.css'




export default class Marketplace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // consoleWidth: 300,
            apps: [
                {
                    app_id: 0,
                    title: 'teste test test',
                    developer: 'test man',
                    desc: 'test man',
                    category: 'excel',
                    target: 'who need to short cut excel typing ',
                    kw: ['test', 'demo'],
                    star: 4.0,
                    reviews: [
                        {
                            user_id: 2,
                            username: 'test man',
                            star: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            star: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            star: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        },
                    ],
                    price: 0,
                    subscription: true,
                    monthly: 0,
                    timestamp: '2017/06/12'
                }, {
                    app_id: 0,
                    title: 'test2',
                    developer: 'test man2',
                    desc: 'this is a description',
                    category: 'scryping',
                    target: 'who need to get data automatically ',
                    kw: ['automation', 'data', 'web'],
                    star: 4.5,
                    reviews: [
                        {
                            user_id: 2,
                            username: 'test man',
                            stars: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            stars: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            stars: 4.0,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        },
                    ],
                    price: 10,
                    subscription: true,
                    monthly: 10,
                    timestamp: '2017/06/12'
                },
            ]
        };

    }

    getAppIcon() {
        return 'https://image.flaticon.com/icons/svg/118/118793.svg'
    }

    countStars(reviews) {
        let sum_starts = 0;
        for (let review of reviews) {
            sum_starts += review.stars
        }

        let ave_starts = sum_starts / reviews.length;

        return ave_starts
    }

    getRanking(ranking_name) {
        const endpoint = `https://sample.com/${ranking_name}`
        axios.get(endpoint).then()
    }

    calculateFlexNumbers(rankings) {

    }


    render() {
        const {consoleWidth} = this.state

        //dynamic style
        const styles = {
            container: {
                height: '100%',
                overflow: 'auto',
            },
            messageContainer: {
                display: 'flex',
                flexDirection: 'column'
            },
            rankingContainer:{
                display: 'flex',
                justifyContent:'space-around',
                margin:'0 50px 0 50px '

            }

        }

        return <div style={styles.container}>
            <div className="console-container">

                <ConsoleContainer{...this.props}/>
            </div>
            <AdHeaderContainer {...this.props}/>
            <div style={styles.rankingContainer}>
                <Rankings flex={1} rankingName={'recommend'} {...this.props}/>
                <Rankings flex={1} rankingName={'popular'} {...this.props}/>
                <Rankings flex={1} rankingName={'campaign'} {...this.props}/>
                <Rankings flex={1} rankingName={'reservation'} {...this.props}/>
            </div>

            <Footer/>
        </div>
    }

}
