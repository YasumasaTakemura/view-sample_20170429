/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';

export class Marketplace extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

    countStars(reviews){
         let sum_starts=0;
        for(let review of reviews){
            sum_starts += review.stars
        }

        let ave_starts = sum_starts / reviews.length;

        return ave_starts
    }


    render() {
        const label = 'send';

        //dynamic style
        const styles = {
            container: {
                height: '100%',
                overflow: 'auto',
                bottom: 50,
                paddingBottom: 50,


            },
            messageContainer: {
                display: 'flex',
                flexDirection: 'column'
            },
        }

        return <div style={styles.container}>
            <AppContainer styles={styles} apps={this.state.apps} countStars={this.countStars} getAppIcon={this.getAppIcon}/>
        </div>
    }

}
