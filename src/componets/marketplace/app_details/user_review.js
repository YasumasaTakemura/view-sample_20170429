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
                display:'flex',
                flexDirection:'column',
                flexWrap:'wrap',
                width:width,
                height:height,
                margin:20
            },
            subContainer: {
                margin:'0 0 5px 0',
                width:width * 0.4

            },
            // title:{ width:width},
            // username:{ width:width},
            // stars:{ width:width},
            // review:{ width:width},
        };

        return <div style={styles.container}>
            {reviews.map((item)=> {

                const {username, title, review, stars, timestamp} = item;

                return <div style={styles.subContainer}>
                    <div style={{float: 'right'}}>{timestamp}</div>
                    <div style={styles.title}>{title}</div>
                    <div style={styles.username}>{username}</div>
                    <div style={styles.stars}><Stars stars={stars}/> ({reviews.length})</div>
                    <div style={styles.review}>{review}</div>

                </div>

            })}

        </div>
    }
}