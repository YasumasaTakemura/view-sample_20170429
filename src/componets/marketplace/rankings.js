/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {GetAppData} from '../../utils/app_data'
import Utils from '../../utils/utils'
import {LoadingComponent} from '../shared_components/loading';
import {Stars} from '../shared_components/user_review/stars'
import './rankings.css'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const appData = new GetAppData();
const utils = new Utils();

export class Rankings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            apps: [
                {
                    app_id: 0,
                    title: 'teste test test',
                    developer: 'test man',
                    desc: 'test man',
                    category: 'excel',
                    target: 'who need to short cut excel typing ',
                    kw: ['test', 'demo'],
                    reviews: [
                        {
                            user_id: 2,
                            username: 'test man',
                            stars: 4,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            stars: 3,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            stars: 4,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        },
                    ],
                    price: 0,
                    subscription: true,
                    monthly: 0,
                    timestamp: '2017/06/12'
                }, {
                    app_id: 1,
                    title: 'test2',
                    developer: 'test man2',
                    desc: 'this is a description',
                    category: 'scryping',
                    target: 'who need to get data automatically ',
                    kw: ['automation', 'data', 'web'],
                    reviews: [
                        {
                            user_id: 2,
                            username: 'test man',
                            stars: 3,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            stars: 2,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            stars: 4,
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

    componentWillMount() {
        // get data via API
    }

    render() {
        const {rankingName, flex} = this.props;
        const {hover,apps} = this.state;
        const label = 'send';

        //dynamic style
        const styles = {
            container: {
                textAlign: 'center',
                height: '100%',
                overflow: 'auto',
                flex: flex
            },
            appListContainer: {
                display: 'flex',
                flexDirection: 'column',
                marginRight: '20px'
            },
            appListContainerBGColor: {
                backgroundColor: 'white'
            },
        };

        return <div style={styles.container}>
            <AppListLabel rankingName={rankingName}/>
            <AppListContainer
                hover={hover}
                styles={styles}
                apps={apps}
                countStars={this.countStars}/>
        </div>
    }

}

const AppListLabel = (props)=> {
    const {rankingName} = props;

    const styles = {
        label: {
            margin: '0 auto',
            width: '80%',
            textAlign: 'center',
            border: 'solid 1px #4B5F7C',
            borderRadius: 5,
        },
    };

    return <div style={styles.label}>
        <label>{rankingName}</label>
    </div>
};

const AppListContainer = (props)=> {
    const {apps} = props;

    //dynamic style
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '10px'
        },
    };


    return <div style={styles.container}>

        {apps.map((item, index)=> {

            const _props = {
                length: apps.length,
                app: item,
                index: index,
                stars: utils.countStars(item.reviews),
            };

            if (index + 1 === apps.length) {
                return <div style={styles.container}>
                    <AppList {..._props} {...props}/>
                    <LoadingComponent/>
                </div>;
            }

            return <div style={styles.container}>
                <AppList {..._props} {...props}/>
            </div>
        })}
    </div>
};

const AppList = (props)=> {
    const {app, checkDetails, stars, index} = props;
    const styles = {
        container: {
            display: 'flex',
            borderBottom: 'solid 1px #4B5F7C',
            alignItems: 'center',
        },
        index: {
            flex: 1,
            fontSize: 24,
            marginRight: 10,

        },
        icon: {
            flex: 1,
            marginRight: 10,
        },
        box: {
            flex: 9,
            width: '100%',
            margin: 10,
            padding: 5,
            borderRadius: 3,
            textAlign: 'left'
        }, boxWithWhiteBGC: {
            flex: 9,
            width: '100%',
            margin: 10,
            padding: 5,
            borderRadius: 3,
            textAlign: 'left',
            backgroundColor: 'white',
        },
        img: {
            width: 50, height: 50
        }
    };

    return <Link
        to={`/marketplace/${app.app_id}` }
        style={styles.container}
        className="app-list-container"
    >

        <div style={styles.index}>{index}</div>

        <div style={styles.icon}>
            <img style={styles.img} src={appData.getAppIcon(app.app_id)}/>
        </div>

        <div style={styles.box}>
            <div>{app.title}</div>
            <div>{app.category}</div>
            <Stars stars={stars}/>
            <span>({app.reviews.length})</span>

        </div>

    </Link>
};

