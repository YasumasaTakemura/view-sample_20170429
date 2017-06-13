/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';

export const Stars = (props)=> {
    const {stars,countReviews} = props;
    switch (true) {
        case (stars === 0):
            return <span><span>☆</span></span>;
        case stars < 1:
            return <StartPattern stars={0}/>;
        case 1 <= stars && stars < 2:
            return <StartPattern stars={1}/>;
        case 2 <= stars && stars < 3:
            return <StartPattern stars={2}/>;
        case 3 <= stars && stars < 4:
            return <StartPattern stars={3}/>;
        case 4 <= stars && stars < 5:
            return <StartPattern stars={4}/>;
        case stars === 5:
            return <StartPattern stars={5}/>;
        default:
            return <span> ☆ </span>
    }
};

const StartPattern = (props)=> {
    const styles = {
        vote:{color: '#FFD700'},
        notVote:{color: '#ddd'},
    };

    switch (true) {
        case props.stars === 0:
            return <span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </span>;
        case props.stars === 1:
            return <span>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </span>;
        case props.stars === 2:
            return <span>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>

            </span>;
        case props.stars === 3:
            return <span>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
                <span style={styles.notVote}>☆</span>
            </span>;
        case props.stars === 4:
            return <span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                <span style={styles.notVote}>☆</span>
            </span>;
        case props.stars === 5:
            return <span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
                   <span style={styles.vote}>★</span>
            </span>;
    }
}