/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {Stars} from '../../shared_components/user_review/stars'

export default class UserReview extends Component {
    render() {

        const {width,height} = this.props;
        const {reviews} = this.props.app;

        const styles = {
            container: {
                overflow:'auto',
                display:'flex',
                flexDirection:'column',
                flexWrap:'wrap',
                width:width,
                height:height,
                margin:20
            },
            subContainer: {
                margin:'0 15px 10px 0',
                width:width * 0.2

            },
            title:{
                fontWeight:500,
                fontSize:18,
            },
            username:{ },
            stars:{ },
            review:{ },
            timestamp:{
                backgroundColor:'white',
                float: 'right',
            },
        };

        return <div style={styles.container}>
            {reviews.map((item)=> {

                const {username, title, review, stars, timestamp} = item;

                return <div style={styles.subContainer}>
                    <div style={styles.timestamp}>{timestamp}</div>
                    <div style={styles.title}>{title}</div>
                    <div style={styles.username}>{username}</div>
                    <div style={styles.stars}><Stars stars={stars}/> ({stars})</div>
                    <div style={styles.review}>{review}</div>

                </div>

            })}

        </div>
    }
}