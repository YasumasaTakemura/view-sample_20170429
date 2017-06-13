/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {LoadingComponent} from '../shared_components/loading';
import './rankings.css'
export class Rankings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false,
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
                            star: 4,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            star: 3,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            star: 4,
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
                            star: 3,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 3,
                            username: 'test man3',
                            star: 2,
                            review: 'this app is sooo good!',
                            timestamp: '2017/06/12'
                        }, {
                            user_id: 4,
                            username: 'test man4',
                            star: 4,
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

    getAppIcon() {
        return 'https://game.boom-app.com/itunesicon/is5.mzstatic.com/image/thumb/Purple127/v4/df/f2/c9/dff2c9ec-8779-d015-0026-687ffcc35d74/source/512x512bb.jpg'
    }

    countStars(reviews) {

        let sum_start = 0;
        for (let review of reviews) {
            sum_start += review.star
        }
        const ave_start = sum_start / reviews.length;

        return ave_start
    }

    onHover(){
        this.setState({hover:true});

    }
    offHover() {
        this.setState({hover: false})
    }

    checkDetails(app_id){
        console.log(app_id)
    }

    render() {
        const {rankingName, flex} = this.props;
        const {hover} = this.state;
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
                backgroundColor:'white'
            },
        };

        return <div style={styles.container}>
            <AppListLabel rankingName={rankingName}/>
            <AppListContainer
                hover={hover}
                checkDetails={this.checkDetails.bind(this)}
                onHover={this.onHover.bind(this)}
                offHover={this.offHover.bind(this)}
                styles={styles}
                apps={this.state.apps}
                countStars={this.countStars}
                getAppIcon={this.getAppIcon}/>
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
    const {apps, countStars} = props;

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

            const _props={
                length:apps.length,
                 app:item,
                 index:index,
                 stars:countStars(item.reviews),
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
    const {app, getAppIcon,checkDetails,onHover,offHover,hover, stars, index} = props;

    console.log(hover)

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
            textAlign:'left'
        }, boxWithWhiteBGC: {
            flex: 9,
            width: '100%',
            margin: 10,
            padding: 5,
            borderRadius: 3,
            textAlign:'left',
            backgroundColor: 'white',
        },
        img: {
            width: 50, height: 50
        }
    };

    return <div
        onClick={()=>checkDetails(app.app_id)}
        style={styles.container}
        className="app-list-container"
    >

        <div style={styles.index}>{index}</div>

        <div style={styles.icon}>
            <img style={styles.img} src={getAppIcon(app.app_id)}/>
        </div>

        <div style={hover?styles.boxWithWhiteBGC:styles.box}>
            <div>{app.title}</div>
            <div>{app.category}</div>
            <Stars stars={stars}/>

        </div>

    </div>
};

const Stars = (props)=> {
    const {stars} = props;
    console.log(stars);

    switch (true) {
        case (stars === 0):
            return <div><span>☆</span></div>;
        case stars < 1:
            return <StartPattern star={0}/>;
        case 1 <= stars && stars < 2:
            return <StartPattern star={1}/>;
        case 2 <= stars && stars < 3:
            return <StartPattern star={2}/>;
        case 3 <= stars && stars < 4:
            return <StartPattern star={3}/>;
        case 4 <= stars && stars < 5:
            return <StartPattern star={4}/>;
        case stars === 5:
            return <StartPattern star={5}/>;
        default:
            return <div> ☆ </div>
    }
};

const StartPattern = (props)=> {
    const styles = {
        vote:{color: '#FFD700'},
        notVote:{color: '#ddd'},
    };

    switch (true) {
        case props.star === 0:
            return <div>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </div>;
        case props.star === 1:
            return <div>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </div>;
        case props.star === 2:
            return <div>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </div>;
        case props.star === 3:
            return <div>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
            </div>;
        case props.star === 4:
            return <div>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
            </div>;
        case props.star === 5:
            return <div>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
            </div>;
    }
}